import React from 'react'


class InputCheckbox extends React.Component {
  handleOnChange = e => {
    let data = {
      target: {}
    }
    data.target.value = e.target.value

    if (data.target.value === 'false') {
      data.target.value = false
    }
    if (data.target.value === 'true') {
      data.target.value = true
    }
    this.props.onChange(data)
  }

  render() {
    let component
    if (this.props.editMode) {
      component = (
        <input
          type='text'
          value={this.props.value}
          onChange={this.handleOnChange}
          onClick={this.props.onClick}
        />
      )
    } else {
      const checkbox = this.props.value === true ? 'far fa-check-square' : 'far fa-square'
      component = (
        <span>
          <i className={checkbox}></i>
        </span>
      )
    }
    return component
  }
}

export default InputCheckbox
