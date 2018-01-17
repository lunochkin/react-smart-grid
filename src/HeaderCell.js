import React from 'react'


export default ({colDef}) =>
  <div className="rsg-cell rsg-header-cell" style={{width: colDef.width, left: colDef.left}}>
    {colDef.name || colDef.key}
  </div>
