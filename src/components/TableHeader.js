import React, { Component, PropTypes } from 'react';

import TableHeaderColumn from './TableHeaderColumn'

class TableHeader extends Component {
  renderTableHeaders() {
    return this.props.headers.map((header) => {
      return (
        <TableHeaderColumn header={header} />
      )
    })
  }
  render() {
    return (
      <thead>
        <tr>
          {this.renderTableHeaders()}
        </tr>
      </thead>
    )
  }
}

export default TableHeader;
