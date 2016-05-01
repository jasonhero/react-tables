import React, { Component, PropTypes } from 'react';


class TableHeaderColumn extends Component {
  render() {
    return (
      <th>
        {this.props.header}
      </th>
    )
  }
}

export default TableHeaderColumn;
