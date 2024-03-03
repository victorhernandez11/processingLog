import { useEffect, useState } from 'react';
import './App.css';
import CreatableSelect from 'react-select/creatable';
import { options } from './components/options';

function App() {
  const [data, setData] = useState({ result: [] });

  useEffect(() => {
    fetch('http://localhost:5010/obs/statusUnknown')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
            {data.result.map((item, index) => (
              <tr key={index}>
                <td>
                  {(item as { Dataset: string }).Dataset.split('_')[0]}
                </td>
                <td>
                  <CreatableSelect
                    className='select'
                    options={options}
                    isMulti
                    styles={{ control: (base) => ({ ...base, width: 300 }) }}
                  />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <textarea placeholder="Comments"></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="submit-button">Submit</button>
        <button className="generate-report-button">Generate Report</button>
      </div>
    </div>
  );
}

export default App;
