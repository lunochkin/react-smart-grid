import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Grid from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a cell value', () => {
    const key = 'id'
    const check = 'test'

    const columns = [
      {key}
    ]

    const rows = [
      {[key]: check}
    ]

    render(<Grid columns={columns} rows={rows} />, node, () => {
      setTimeout(() => {
        expect(node.innerHTML).toContain(check)
      }, 100)
    })
  })
})
