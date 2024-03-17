import { useEffect, useState } from 'react';
import './App.css';
import CreatableSelect from 'react-select/creatable';
import { Button } from '@mui/material'

interface DataItem {
  Dataset: string;
  ObservationID: number;
  processingCode: string[] | null;
  submissionChecked: boolean;
  comment: string;
}

function App() {
  const [data, setData] = useState<{ result: DataItem[] }>({ result: [] });
  const [options, setOptions] = useState<{ value: string; label: string; }[]>([]);

  useEffect(() => {
    fetch('http://localhost:5010/obs/statusUnknown')
      .then(response => response.json())
      .then(data => {
        const updatedData = data.result.map((item: DataItem) => ({
          ...item,
          processingCode: null,
          submissionChecked: false,
          comment: ''
        }));
        setData({ result: updatedData });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:5010/obs/statusUnknown')
      .then(response => response.json())
      .then(data => {
        const updatedData = data.result.map((item: DataItem) => ({
          ...item,
          processingCode: null,
          submissionChecked: false,
          comment: ''
        }));
        setData({ result: updatedData });
      })
      .catch(error => console.error('Error fetching data:', error));

    // Fetch options from the API
    fetch('http://localhost:5010/obs/codes')
      .then(response => response.json())
      .then(data => {
        const formattedOptions = data.map((item: { id: number; code: string; description: string; }) => ({
          value: item.code,
          label: item.description
        }));
        setOptions(formattedOptions);
      })
      .catch(error => console.error('Error fetching options:', error));
  }, []);

  const handleSelectChange = (index: number, selectedOptions: ReadonlyArray<{ value: string; label: string; }>) => {
    const updatedData = [...data.result];
    updatedData[index].processingCode = selectedOptions.map(option => option.value);
    setData({ result: updatedData });
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const updatedData = [...data.result];
    updatedData[index].submissionChecked = checked;
    setData({ result: updatedData });
  };

  const handleCommentChange = (index: number, comment: string) => {
    const updatedData = [...data.result];
    updatedData[index].comment = comment;
    setData({ result: updatedData });
  };

  // const handleSubmit = () => {
  //   const update = data.result.map((item: DataItem) => ({
  //     obs_id: item.ObservationID,
  //     processing_code: item.processingCode ? item.processingCode.join(',') : null,
  //     submission_code: item.submissionChecked ? 'submitted' : 'not_submitted',
  //     comment: item.comment
  //   }));

  //   fetch('http://localhost:5010/obs/update', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ update }),
  //   })
  //     .then(response => response.json())
  //     .then(responseData => {
  //       console.log('Submit response:', responseData);
  //     })
  //     .catch(error => {
  //       console.error('Error submitting data:', error);
  //     });
  // };
  // this one is for testing the handleSubmit function
  const handleSubmit = () => {
    const update = data.result.map((item: DataItem) => ({
      obs_id: item.ObservationID, // Change this line
      processing_code: item.processingCode ? item.processingCode.join(',') : null,
      submission_code: item.submissionChecked ? 'submitted' : 'not_submitted',
      comment: item.comment
    }));

    console.log(JSON.stringify({ update }));
  };

  return (
    <div className="App">
      <div className="title-section">
        <h1 className="title">Processing Log</h1>
        <p className="subtitle">Record the outcomes of your observation processing</p>
      </div>
      <div className='table-container'>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '17.5%' }}>Name</th>
              <th style={{ width: '37.5%' }}>Code</th>
              <th style={{ width: '12.5%' }}>Submit</th>
              <th style={{ width: '32.5%' }}>Comments</th>
            </tr>
          </thead>
          <tbody>
            {data.result.map((item: DataItem, index: number) => (
              <tr key={index}>
                <td>
                  {item.Dataset.split('_')[0]}
                </td>
                <td>
                  <CreatableSelect
                    className='select'
                    options={options}
                    isMulti
                    styles={{ control: (base) => ({ ...base, width: 300 }) }}
                    onChange={(selectedOption) => handleSelectChange(index, selectedOption)}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.submissionChecked}
                    onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                  />
                </td>
                <td>
                  <textarea
                    placeholder="Comments"
                    value={item.comment}
                    onChange={(e) => handleCommentChange(index, e.target.value)}
                  ></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <button className="generate-report-button">Generate Report</button>
        <Button variant="contained" color="primary">Submit</Button>
      </div>
    </div>
  );
}

export default App;
