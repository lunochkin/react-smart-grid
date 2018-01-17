import React from 'react'
import {connect} from 'react-redux'
import HeaderCell from './HeaderCell'


const connector = connect(
  state => ({
    colDefs: state.colDefs,
    width: state.width
  })
)


const Header = ({colDefs, width}) =>
  <div className="rsg-header">
    <div className="rsg-row rsg-header-row" style={{width}}>
      {colDefs.map((colDef, index) =>
        <HeaderCell key={index} colDef={colDef} />
      )}
    </div>
  </div>


export default connector(Header)
