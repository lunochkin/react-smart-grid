import React from 'react'
import Cell from './Cell'


export default ({row, columns, width}) =>
  <div className="rsg-row rsg-body-row" style={{width}}>
    {columns.map((column, index) =>
      <Cell
        key={index}
        row={row}
        column={column}
      />
    )}
  </div>
