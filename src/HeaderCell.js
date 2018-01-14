import React from 'react'


export default ({column}) =>
  <div className="RSG-cell RSG-header-cell" style={{width: column.width, left: column.left}}>
    {column.name || column.key}
  </div>
