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
  {person: 'jim', location: 'dump', hobby: 'copper salvage', age: 57},
  {person: 'sam', location: 'Los Angeles', hobby: 'Techy', age: 12},
  {person: 'billy', location: 'New York', hobby: 'Stock Trader', age: 20},
  {person: 'richard', location: 'Austin, Texas', hobby: 'Cattle Ranger', age: 38},
  {person: 'Saul', location: 'Florida', hobby: 'Alligator Wrestler', age: 38},
  {person: 'Samantha', location: 'Georgia', hobby: 'Waitress', age: 50},
  {person: 'Harvey', location: 'Hollywood', hobby: 'Actor', age: 68},
  {person: 'Pete', location: 'China', hobby: 'Fisher', age: 77},
  {person: 'Larry', location: 'Australia', hobby: 'Kanga Banga', age: 17},
  {person: 'Joe', location: 'Antartica', hobby: 'Penguin Trainer', age: 27}
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
    if (nextProps.length > 0) {
      this.setState((state) => {
        // Will not set state twice in this lifecycle
        if (props.sortHeaders) {
          this.state.headers = props.sortHeaders(Object.keys(props.data[0]))
        } else {
          this.state.headers = Object.keys(props.data[0])
        }
        return state;
      });
    }
  }
  renderTableBody() {
    const handlers = {
      onRowClick: this.onRowClick,
      onRowHover: this.onRowHover,
      onRowExit: this.onRowExit,
      onCellClick: this.onCellClick,
      onCellHover: this.onCellHover.bind(this),
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
  onCellClick = (event, rowNumber, columnNumber) => {
    if (this.props.onCellClick) {
      event.stopPropagation();
      this.props.onCellClick(event, rowNumber, columnNumber);
    }
  }
  onCellHover = (event, rowNumber, columnNumber) => {
    if (this.props.onCellHover) this.props.onCellHover(event, rowNumber, columnNumber);
  };
  onCellExit = (event, rowNumber, columnNumber) => {
    if (this.props.onCellExit) this.props.onCellExit(event, rowNumber, columnNumber);
  }
  cellContentModifier = (content, rowNumber, columnNumber) => {
    if (this.props.cellContentModifier) return this.props.cellContentModifier(content, rowNumber, columnNumber);
    return content;
  }
  onRowClick = (event, rowNumber, columnNumber) => {
    if (this.props.onRowClick) this.props.onRowClick(event, rowNumber, columnNumber);
  }
  onRowHover = (event, rowNumber, columnNumber) => {
    if (this.props.onRowHover) this.props.onRowHover(event, rowNumber, columnNumber);
  }
  onRowExit = (event, rowNumber, columnNumber) => {
    if (this.props.onRowExit) this.props.onRowExit(event, rowNumber, columnNumber);
  }
  render() {
    return (
      <table className='rtables-table'>
        {this.renderTableHeader()}
        {this.renderTableBody()}
        {this.renderTableFooter()}
      </table>
    )
  }
}

function cellClick(e, row, console) {
  e.target.style.backgroundColor = 'rgb(194, 148, 230)';
  let keys = Object.keys(fillerData[0]);
  console.log(keys[col]);
}

function rowClick(e, row) {
  e.currentTarget.style.backgroundColor = 'rgb(125, 49, 95)';
}


class Test extends Component {
  constructor() {
    super()
    this.state = { data: fillerData, selected: [] }
  }
  test() {
    this.setState((state) => {
      state.data = state.data.reverse();
      return state;
    })
  }
  cellClick(e, row, col) {
    this.setState((state) => {
      state.selected.push({row, col})
      return state;
    })
  }
  colorify() {
    this.state.selected.forEach(() => {

    });
  }
  modifier(content, row, col) {
    let keys = Object.keys(fillerData[0]);
    for (var i = 0; i < this.state.selected.length; i++) {
      let selected = this.state.selected[i];
      if (selected.row === row && selected.col === col) {
        if (keys[col] === 'person') {
          return (
            <span className='newtest'> {content} </span>
          )
        }
        return (
          <span className='test'> {content} </span>
        )
      }
    }
    return content;
  }
  render() {
    return (
    <div>
      <Table
        data={this.state.data}
        cellContentModifier={this.modifier.bind(this)}
        onRowClick={rowClick}
        onCellClick={this.cellClick.bind(this)} />
      <button onClick={this.test.bind(this)}> Test </button>
      <div> Selected: {this.state.selected.join(' | ')} </div>
    </div>
    )
  }
}

render((
  <Test />
),
document.getElementById('root')
)
