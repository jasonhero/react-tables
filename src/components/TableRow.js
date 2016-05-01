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
  onCellClick(columnNumber) {
    if (this.props.onCellClick) this.props.onCellClick(columnNumber, this.props.rowNumber, event)
  }
  onCellHover(columnNumber) {
    console.log('Test TableRow');
    if (this.props.onCellHover) this.props.onCellHover(columnNumber, this.props.rowNumber, event)
  }
  onCellExit(columnNumber) {
    if (this.props.onCellExit) this.props.onCellExit(columnNumber, this.props.rowNumber, event)
  }
  cellContentModifier(columnNumber, content) {
    if (this.props.cellContentModifier) this.props.cellContentModifier(columnNumber, this.props.rowNumber, content);
  }
  onClick(event) {
    if (this.props.onRowClick) this.props.onRowClick(this.props.rowNumber, event);
  }
  onMouseEnter(event) {
    if (this.props.onRowHover) this.props.onRowHover(this.props.rowNumber, event);
  }
  onMouseLeave(event) {
    if (this.props.onRowExit) this.props.onRowExit(this.props.rowNumber, event);
  }
  render() {
    const handlers = {
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }
    return (
      <tr
        {...handlers} >
        {this.renderTableRow()}
      </tr>
    )
  }
}

export default TableRow;
