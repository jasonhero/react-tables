import React, { Component, PropTypes } from 'react';

class TableRowColumn extends Component {
  constructor(props) {
    super(props)
  }
  onClick = (event) => {
    if (this.props.onCellClick) this.props.onCellClick(event, this.props.columnNumber);
  }
  onMouseEnter = (event) => {
    if (this.props.onCellHover) this.props.onCellHover(event, this.props.columnNumber);
  }
  onMouseLeave = (event) => {
    if (this.props.onCellExit) this.props.onCellExit(event, this.props.columnNumber);
  }
  contentModifier = () => {
    if (this.props.cellContentModifier) return this.props.cellContentModifier(this.props.cellData, this.props.columnNumber);
    return this.props.cellData;
  }
  render() {
    const handlers = {
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }
    return (
      <td 
        className='rtables-td'
        {...handlers} >
        {this.contentModifier()}
      </td>
    )
  }
}

export default TableRowColumn;
