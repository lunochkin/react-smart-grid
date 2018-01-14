import React from 'react'
import ReactDOM from 'react-dom'
import Row from './Row'


class Body extends React.Component {
  
  componentDidMount() {
    if (this.props.onScroll) {
      ReactDOM.findDOMNode(this).addEventListener('scroll', this.props.onScroll)
    }
  }

  componentWillUnmount() {
    if (this.props.onScroll) {
      ReactDOM.findDOMNode(this).removeEventListener(this.props.onScroll)
    }
  }

  render() {
    const {rows, columns} = this.props

    return (
      <div className="RSG-body">
        {rows.map((row, index) =>
          <Row
            key={index}
            row={row}
            columns={columns}
          />
        )}
      </div>
    )
  }
} 


export default Body
