import React, { Component, PropTypes } from 'react';

import TableRow from './TableRow'

class TableBody extends Component {
  renderTableRows() {
    const handlers = {
      onRowClick: this.props.onRowClick,
      onRowHover: this.props.onRowHover,
      onRowExit: this.props.onRowExit,
      onCellClick: this.props.onCellClick,
      onCellHover: this.props.onCellHover,
      onCellExit: this.props.onCellExit,
      cellContentModifier: this.props.cellContentModifier
    }
    return this.props.data.map((rowData, rowNumber) => {
      return (
        <TableRow
          {...handlers}
          rowData={rowData}
          rowNumber={rowNumber}
          headers={this.props.headers}/>
      )
    });
  }
  render() {
    return (
      <tbody>
        {this.renderTableRows()}
      </tbody>
    )
  }
}

export default TableBody;
