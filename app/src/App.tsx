import React from 'react';
import './App.css';
import CreatableSelect from 'react-select/creatable';
import { options } from './components/options';


function App() {
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
              <th style={{ width: '10%' }}>Log?</th>
              <th style={{ width: '20%' }}>Name</th>
              <th style={{ width: '35%' }}>Code</th>
              <th style={{ width: '10%' }}>Submit</th>
              <th style={{ width: '25%' }}>Comments</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  Observation_name{index}
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
