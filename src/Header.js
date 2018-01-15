import React from 'react'
import HeaderCell from './HeaderCell'


export default ({columns, width}) =>
  <div className="rsg-header">
    <div className="rsg-row rsg-header-row" style={{width}}>
      {columns.map((column, index) =>
        <HeaderCell key={index} column={column} />
      )}
    </div>
  </div>
