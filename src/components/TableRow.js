import React, { Component, PropTypes } from 'react';

import TableRowColumn from './TableRowColumn'

class TableRow extends Component {
  renderTableRow() {
    const handlers = {
      onCellClick: this.onCellClick,
      onCellHover: this.onCellHover,
      onCellExit: this.onCellExit,
      cellContentModifier: this.cellContentModifier
    }
    return this.props.headers.map((header, columnNumber) => {
      return (
        <TableRowColumn
          cellData={this.props.rowData[header]}
          columnNumber={columnNumber}
          {...handlers} />
      )
    });
  }
  onCellClick = (event, columnNumber) => {
    if (this.props.onCellClick) this.props.onCellClick(event, this.props.rowNumber, columnNumber)
  }
  onCellHover = (event, columnNumber) => {
    if (this.props.onCellHover) this.props.onCellHover(event, this.props.rowNumber, columnNumber)
  }
  onCellExit = (event, columnNumber) => {
    if (this.props.onCellExit) this.props.onCellExit(event, this.props.rowNumber, columnNumber)
  }
  cellContentModifier = (content, columnNumber) => {
    if (this.props.cellContentModifier) return this.props.cellContentModifier(content, this.props.rowNumber, columnNumber);
    return content;
  }
  onClick = (event) => {
    console.log('row clicked');
    if (this.props.onRowClick) this.props.onRowClick(event, this.props.rowNumber);
  }
  onMouseEnter = (event) => {
    if (this.props.onRowHover) this.props.onRowHover(event, this.props.rowNumber);
  }
  onMouseLeave = (event) => {
    if (this.props.onRowExit) this.props.onRowExit(event, this.props.rowNumber);
  }
  render() {
    const handlers = {
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }
    return (
      <tr
        className='rtables-tr'
        {...handlers} >
        {this.renderTableRow()}
      </tr>
    )
  }
}

export default TableRow;
