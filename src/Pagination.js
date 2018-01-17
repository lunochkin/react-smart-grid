import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setPageNumber} from './module'
import {Ripple} from 'rmwc/Ripple'
import cn from 'classnames'
import '@material/ripple/dist/mdc.ripple.min.css'


const connector = connect(
  state => state.pagination,
  dispatch => bindActionCreators({setPageNumber}, dispatch)
)


class Pagination extends React.Component {

  handleClick = pageNumber => () => {
    this.props.setPageNumber(pageNumber)
  }

  render() {
    const {pageSize, total, pageNumber} = this.props

    if (total === 0) {
      return null
    }

    const count = Math.ceil(total / pageSize)

    const pages = Array(count).fill(1).map((one, index) => index + 1)

    const prev = Math.max(pageNumber - 1, 1)
    const next = Math.min(pageNumber + 1, count)

    return (
      <ul className="rsg-pagination">
        {this.renderItem(prev, 'prev', pageNumber === 1)}

        {pages.map(one => this.renderItem(one, one, false))}

        {this.renderItem(next, 'next', pageNumber === count)}
      </ul>
    )
  }

  renderItem = (one, title, disabled) => {
    const {pageNumber} = this.props

    return (
      <Ripple key={one}>
        <li
          className={cn({
            active: !disabled && one === pageNumber,
            disabled
          })}
          onClick={disabled ? null : this.handleClick(one)}
        >{title}</li>
      </Ripple>
    )
  }
}


export default connector(Pagination)
