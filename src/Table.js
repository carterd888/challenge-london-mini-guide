import React from "react";

function Table() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Dan</td>
              <td>0121</td>
              <td>Bham</td>
              <td>cyf.io</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Dave</td>
              <td>01384</td>
              <td>Dudley</td>
              <td>WBA.fc</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Gav</td>
              <td>01332</td>
              <td>Derby</td>
              <td>Cat.uk</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default Table;