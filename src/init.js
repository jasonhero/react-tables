import React, { PropTypes,  Component } from 'react';
import { render } from 'react-dom';

import './assets/css/style.css';

// Thing
import TableHeader from './components/TableHeader'
import TableBody from './components/TableBody'
// import TableFooter from './components/TableFooter'


// Load default inline styles
import { mainStyle, rowStyle, headerStyle, theadStyle, fieldStyle } from './styles'


let fillerData = [
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27},
  {person: 'bob', location: 'moon', hobby: 'woodcarving', age: 27}
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
  componentWillReceiveProps(nextProps) {
    this.setState((state) => {
      // Will not set state twice in this lifecycle
      state.headers = Object.keys(nextProps.data[0]) || []
      return state;
    });
  }
  renderTableBody() {
    const handlers = {
      onRowClick: this.onRowClick,
      onRowHover: this.onRowHover,
      onRowExit: this.onRowExit,
      onCellClick: this.onCellClick,
      onCellHover: this.onCellHover,
      onCellExit: this.onCellExit,
      cellContentModifier: this.cellContentModifier
    }
    if (this.props.data.length > 0) {
      return (
        <TableBody
          {...handlers}
          data={this.props.data}
          headers={this.state.headers} />
      )
    }
  }
  renderTableHeader() {
    if (this.state.headers.length > 0) {
      return (
        <TableHeader
          headers={this.state.headers} />
      )
    }
  }
  renderTableFooter() {
    return null;
  }
  onCellClick(columnNumber, rowNumber, event) {
    if (this.props.onCellClick) this.props.onCellClick(columnNumber, rowNumber, event);
  }
  onCellHover(columnNumber, rowNumber, event) {
    console.log('root test');
    if (this.props.onCellHover) this.props.onCellHover(columnNumber, rowNumber, event);
  }
  onCellExit(columnNumber, rowNumber, event) {
    if (this.props.onCellExit) this.props.onCellExit(columnNumber, rowNumber, event);
  }
  cellContentModifier(columnNumber, rowNumber, content) {
    if (this.props.cellContentModifier) return this.props.cellContentModifier(content);
    console.log('wtf');
    return content;
  }
  onRowClick(columnNumber, rowNumber, event) {
    if (this.props.onRowClick) this.props.onRowClick(columnNumber, rowNumber, event);
  }
  onRowHover(columnNumber, rowNumber, event) {
    if (this.props.onRowHover) this.props.onRowHover(columnNumber, rowNumber, event);
  }
  onRowExit(columnNumber, rowNumber, event) {
    if (this.props.onRowExit) this.props.onRowExit(columnNumber, rowNumber, event);
  }
  render() {
    return (
      <table>
        {this.renderTableHeader()}
        {this.renderTableBody()}
        {this.renderTableFooter()}
      </table>
    )
  }
}


render((
  <Table data={fillerData} sortHeaders={(headers) => headers.sort()}/>
),
document.getElementById('root')
)
