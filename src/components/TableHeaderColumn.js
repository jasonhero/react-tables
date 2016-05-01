import React, { Component, PropTypes } from 'react';


class TableHeaderColumn extends Component {
  render() {
    return (
      <th className='rtables-th'>
        {this.props.header}
      </th>
    )
  }
}

export default TableHeaderColumn;
