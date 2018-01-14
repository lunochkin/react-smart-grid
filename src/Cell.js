import React from 'react'


class Cell extends React.Component {
  render() {
    const {row, column} = this.props

    return (
      <div className="RSG-cell RSG-body-cell" style={{left: column.left, width: column.width}}>
        {row[column.key]}
      </div>
    )
  }
}


export default Cell