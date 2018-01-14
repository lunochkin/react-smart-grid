import React from 'react'
import Body from './Body'
import Header from './Header'


const colDefDefault = {
  width: 100
}

const processColDefs = colDefs => {
  let left = 0
  const result = []
  for (let i = 0; i < colDefs.length; i++) {
    const colDef = {...colDefDefault, ...colDefs[i]}
    colDef.left = left

    left += colDef.width
    result.push(colDef)
  }
  return result
}

export default ({rows, columns}) => {

  const colDefs = processColDefs(columns)

  return (
    <div>
      <Header columns={colDefs} />
      <Body
        columns={colDefs}
        rows={rows}
      />
    </div>
  )
}