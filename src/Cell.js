import React from 'react'


class Cell extends React.Component {
  render() {
    const {value} = this.props
    return (
      <div>
        {value}
      </div>
    )
  }
}


export default Cell
