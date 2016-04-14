import React, { Component } from 'react';
import { render } from 'react-dom';

import './assets/css/style.css';


let fillerData = [
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27},
  {person: 'bob', location: 'moon', hobby: 'music', age: 27}
];

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <Header headers={Object.keys(this.props.data[0])} />
        <Body data={this.props.data}/>
      </table>
    )
  }
}

function Header({headers}) {
  let headerColumns = headers.map((header) => {
    return (
      <th> {header} </th>
    )
  })
  return (
    <thead>
      <tr>
      {headerColumns}
      </tr>
    </thead>
  )
}

function Body({data}) {
  let rows = data.map((row) => {
    return (
      <Row rowData={row}/>
    )
  });
  return (
    <tbody>
      {rows}
    </tbody>
  )
}

function Row({rowData}) {
  let headers = Object.keys(rowData);
  let row = headers.map((header) => {
    return (
      <td> {rowData[header]} </td>
    )
  })
  return (
    <tr>
      {row}
    </tr>
  )
}

function Footer() {

}

render((
  <Table data={fillerData}/>
),
document.getElementById('root')
)
