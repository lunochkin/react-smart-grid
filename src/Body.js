import React from 'react'
import Row from './Row'


export default ({rows, columns}) =>
  <div className="RSG-body">
    {rows.map((row, index) =>
      <Row
        key={index}
        row={row}
        columns={columns}
      />
    )}
  </div>
