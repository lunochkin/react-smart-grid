import React from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import Row from './Row'
import {getVisible} from './module'


const connector = connect(
  state => ({
    visible: getVisible(state)
  })
)


class Body extends React.Component {
  
  componentDidMount() {
    if (this.props.onScroll) {
      ReactDOM.findDOMNode(this).addEventListener('scroll', this.props.onScroll)
    }
  }

  componentWillUnmount() {
    if (this.props.onScroll) {
      ReactDOM.findDOMNode(this).removeEventListener('scroll', this.props.onScroll)
    }
  }

  render() {
    const {visible} = this.props

    return (
      <div className="rsg-body">
        {visible.map(one =>
          <Row
            key={one}
            index={one}
          />
        )}
      </div>
    )
  }
} 


export default connector(Body)
