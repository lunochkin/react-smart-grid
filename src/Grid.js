import React from 'react'
import ReactDOM from 'react-dom'
import Body from './Body'
import Header from './Header'
import Pagination from './Pagination'


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


class Grid extends React.Component {

  header

  state = {
    pageNumber: 1
  }

  handlePageNumberChange = pageNumber => {
    this.setState({
      pageNumber
    })
  }

  componentDidMount() {
    this.header = ReactDOM.findDOMNode(this).querySelector('.rsg-header')
  }


  handleScroll = e => {
    const scrollLeft = e.target.scrollLeft
    this.header.style.left = `${-scrollLeft}px`
  }

  render() {
    const {rows, columns, ...props} = this.props

    const colDefs = processColDefs(columns)

    const height = props.height || 400
    const pageSize = 20
    const total = rows.length

    const width = colDefs.reduce((result, one) => result + one.width, 0)

    const offset = pageSize * (this.state.pageNumber - 1)

    const rowsToDisplay = rows.slice(offset, offset + pageSize)

    return (
      <div className="rsg-grid" style={{height}}>
        <Header columns={colDefs} width={width} />
        <Body
          columns={colDefs}
          rows={rowsToDisplay}
          onScroll={this.handleScroll}
          width={width}
        />
        {
          <Pagination
            pageSize={pageSize}
            total={total}
            pageNumber={this.state.pageNumber}
            onChange={this.handlePageNumberChange}
          />
        }
      </div>
    )
  }
}

export default Grid
