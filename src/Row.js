import React from 'react'
import {connect} from 'react-redux'
import Cell from './Cell'


const connector = connect(
  (state, ownProps) => ({
    width: state.width,
    colDefs: state.colDefs
  })
)


const Row = ({index, colDefs, width}) =>
  <div className="rsg-row rsg-body-row" style={{width}}>
    {colDefs.map((colDef) =>
      <Cell
        key={colDef.key}
        index={index}
        colDef={colDef}
      />
    )}
  </div>


export default connector(Row)
