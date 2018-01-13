import React from 'react'
import Cell from './Cell'


export default ({row, columns}) =>
  <div>
    {columns.map((column, index) =>
      <Cell
        key={index}
        value={row[column.key]}
      />
    )}
  </div>
