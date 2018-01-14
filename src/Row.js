import React from 'react'
import Cell from './Cell'


export default ({row, columns}) =>
  <div className="RSG-row RSG-body-row">
    {columns.map((column, index) =>
      <Cell
        key={index}
        row={row}
        column={column}
      />
    )}
  </div>
