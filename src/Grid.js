import React from 'react'
import Body from './Body'
import Header from './Header'


export default ({rows, columns}) =>
  <div>
    <Header columns={columns} />
    <Body
      columns={columns}
      rows={rows}
    />
  </div>
