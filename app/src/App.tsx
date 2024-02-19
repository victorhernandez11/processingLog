// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <div className="header">
//           <div className="column">Log?</div>
//           <div className="column">Name</div>
//           <div className="column">Code</div>
//           <div className="column">Submission Status</div>
//           <div className="column">Comments</div>
//         </div>
//         {Array.from({ length: 10 }).map((_, index) => (
//           <div key={index} className="row">
//             <div className="column">
//               <input type="checkbox" />
//             </div>
//             <div className="column">
//               Observation_name{index}
//             </div>
//             <div className="column">
//               <select>
//                 <option value="">Select</option>
//                 <option value="code1">Code1</option>
//                 <option value="code2">Code2</option>
//               </select>
//             </div>
//             <div className="column">
//               <input type="checkbox" />
//             </div>
//             <div className="column">
//               <input type="text" placeholder="Comments" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';

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
              <th>Log?</th>
              <th>Name</th>
              <th>Code</th>
              <th>Submit</th>
              <th>Comments</th>
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
                  <select>
                    <option value="">Select</option>
                    <option value="code1">Code1</option>
                    <option value="code2">Code2</option>
                  </select>
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
      </div>
    </div>
  );
}

export default App;
