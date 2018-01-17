import React from 'react'
import {connect} from 'react-redux'
import {getCellValue} from './module'


const connector = connect(
  (state, ownProps) => ({
    value: getCellValue(state, ownProps.index, ownProps.colDef.key)
  })
)


class Cell extends React.Component {
  render() {
    const {value, colDef: {left, width}} = this.props

    return (
      <div className="rsg-cell rsg-body-cell" style={{left, width}}>
        {value}
      </div>
    )
  }
}


export default connector(Cell)
