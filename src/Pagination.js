import React from 'react'
import cn from 'classnames'



class Pagination extends React.Component {

  handleClick = pageNumber => () => {
    this.props.onChange(pageNumber)
  }

  render() {
    const {pageSize, total, pageNumber} = this.props

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
      <li
        className={cn({
          active: !disabled && one === pageNumber,
          disabled
        })}
        key={one}
        onClick={disabled ? null : this.handleClick(one)}
      >{title}</li>
    )
  }
}


export default Pagination
