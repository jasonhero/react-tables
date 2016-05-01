import React, { Component, PropTypes } from 'react';

class TableRowColumn extends Component {
  constructor(props) {
    super(props)
    console.log(props, 'TESTING');
  }
  onClick(event) {
    if (this.props.onCellClick) this.props.onCellClick(this.props.columnNumber, event);
  }
  onMouseEnter(event) {
    if (this.props.onCellHover) this.props.onCellHover(this.props.columnNumber, event);
  }
  onMouseLeave(event) {
    if (this.props.onCellExit) this.props.onCellExit(this.props.columnNumber, event);
  }
  contentModifier() {
    if (this.props.cellContentModifier) this.props.cellContentModifier(this.props.columnNumber, this.props.cellData);
    return 'Test'
  }
  render() {
    const handlers = {
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }
    return (
      <td
        {...handlers} >
        {'bleh'}
      </td>
    )
  }
}

export default TableRowColumn;
