import React, {Component} from 'react'
import {render} from 'react-dom'

import Grid from '../../src'


const columns = [
  {
    key: 'id',
    name: 'ID'
  },
  {
    key: 'name',
    name: 'Name'
  }
]

const rows = [
  {
    id: 1,
    name: 'Alex'
  },
  {
    id: 2,
    name: 'Maksim'
  }
]

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-smart-grid Demo</h1>

        <Grid
          columns={columns}
          rows={rows}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
