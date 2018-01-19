import React from 'react'


class TextEditor extends React.Component {

  ref

  componentDidMount() {
    this.ref.focus()
    this.ref.select()
  }

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.props.onRelease()
    }
  }

  render() {
    const {value, onChange, onClick} = this.props

    return (
      <input
        ref={c => this.ref = c}
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={this.handleKeyUp}
        onClick={onClick}
      />
    )
  }
}

export default TextEditor
