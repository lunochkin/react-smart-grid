import React from 'react'
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect, Provider} from 'react-redux'
import {initRows, initColDefs} from './module'
import Body from './Body'
import Header from './Header'
import Pagination from './Pagination'
import store from './store'


const withDispatch = connect(
  null,
  dispatch => ({dispatch})
)


class Grid extends React.Component {

  header

  componentDidMount() {
    this.header = ReactDOM.findDOMNode(this).querySelector('.rsg-header')

    this.props.dispatch(initRows(this.props.rows))
    this.props.dispatch(initColDefs(this.props.columns))
  }


  handleScroll = e => {
    const scrollLeft = e.target.scrollLeft
    this.header.style.left = `${-scrollLeft}px`
  }

  render() {
    const height = this.props.height || 400

    return (
      <div className="rsg-grid" style={{height}}>
        <Header />
        <Body
          onScroll={this.handleScroll}
        />
        <Pagination />
      </div>
    )
  }
}

const ConnectedGrid = withDispatch(Grid)

export default props =>
  <Provider store={store}>
    <ConnectedGrid {...props} />
  </Provider>
