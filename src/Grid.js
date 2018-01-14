import React from 'react'
import ReactDOM from 'react-dom'
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


class Grid extends React.Component {

  header

  componentDidMount() {
    this.header = ReactDOM.findDOMNode(this).querySelector('.RSG-header')
  }


  handleScroll = e => {
    const scrollLeft = e.target.scrollLeft
    this.header.style.left = `${-scrollLeft}px`
  }

  render() {
    const {rows, columns, ...props} = this.props

    const colDefs = processColDefs(columns)

    const height = props.height || 400

    return (
      <div className="RSG-grid" style={{height}}>
        <Header columns={colDefs} />
        <Body
          columns={colDefs}
          rows={rows}
          onScroll={this.handleScroll}
        />
      </div>
    )
  }
}

export default Grid