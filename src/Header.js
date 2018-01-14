import React from 'react'
import HeaderCell from './HeaderCell'


export default ({columns}) =>
  <div className="RSG-row RSG-header-row">
    {columns.map((column, index) =>
      <HeaderCell key={index} column={column} />
    )}
  </div>
