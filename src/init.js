import React, { PropTypes,  Component } from 'react';
import { render } from 'react-dom';

import './assets/css/style.css';

// Load default inline styles
import { mainStyle, rowStyle, headerStyle, theadStyle, fieldStyle } from './styles'


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

/*
Dynamically generating table that morphs to fit any data structure or styling needs
*/

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { headers: []}

    if (props.data.length > 0) {
      // Only set headers if theres data.
      if (props.sortHeaders) {
        this.state.headers = props.sortHeaders(Object.keys(props.data[0]))
      } else {
        this.state.headers = Object.keys(props.data[0])
      }
    }
  }
  getChildContext() {
    // May ditch context in the future and make stateless components as functions on this component
    return {
      headers: this.state.headers
    }
  }
  componentDidMount() {
    //url data fectching in here for future
  }
  componentWillReceiveProps(nextProps) {
    this.setState((state) => {
      // Will not set state twice in this lifecycle
      state.headers = Object.keys(nextProps.data[0]) || []
      return state;
    })
  }
  render() {
    return (
      <table style={mainStyle}>
        <Header headers={this.state.headers} />
        <Body data={this.props.data} />
      </table>
    )
  }
}

Table.childContextTypes = {
  headers: PropTypes.array
}

function Header({headers}) {
  let headerColumns = headers.map((header) => {
    return (
      <th style={headerStyle}> {header} </th>
    )
  })
  return (
    <thead style={theadStyle}>
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

function Row({rowData}, context) {
  let row = context.headers.map((header) => {
    return (
      <td style={fieldStyle}> {rowData[header]} </td>
    )
  })
  return (
    <tr style={rowStyle}>
      {row}
    </tr>
  )
}

Row.contextTypes = {
  headers: PropTypes.array
}

function Footer() {

}

render((
  <Table data={fillerData} sortHeaders={(headers) => headers.sort()}/>
),
document.getElementById('root')
)
