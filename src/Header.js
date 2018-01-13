import React from 'react'
import HeaderCell from './HeaderCell'


export default ({columns}) =>
  <div>
    {columns.map((column, index) =>
      <HeaderCell key={index} column={column} />
    )}
  </div>
