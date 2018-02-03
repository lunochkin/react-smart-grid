import React from 'react'
import {connect} from 'react-redux'
import {getCellValue, setCellValue, setEditingCoords, clearEditingCoords} from './module'
import TextEditor from './TextEditor'


const connector = connect(
  (state, ownProps) => ({
    value: getCellValue(state, ownProps.index, ownProps.colDef.key),
    editing: state.editingCoords.index === ownProps.index && state.editingCoords.key === ownProps.colDef.key
  }),
  dispatch => ({dispatch})
)


class Cell extends React.Component {

  handleClick = e => {
    this.props.dispatch(setEditingCoords(-1, -1))
  }

  handleInputClick = e => {
    e.stopPropagation()
  }

  handleDoubleClick = () => {
    this.props.dispatch(setEditingCoords(this.props.index, this.props.colDef.key))
  }

  handleRelease = () => {
    this.props.dispatch(clearEditingCoords())
  }

  handleChange = e => {
    const {index, colDef} = this.props
    const value = e.target.value

    this.props.dispatch(setCellValue(index, colDef, value))
  }

  render() {
    const {value, colDef: {left, width}} = this.props
    const Component = this.props.colDef.component
    const editable = this.props.colDef.editable

    return (
      <div
        className="rsg-cell rsg-body-cell"
        style={{left, width}}
        onDoubleClick={this.props.colDef.editable && this.handleDoubleClick}
        onClick={this.handleClick}
      >
        {Component && editable && this.props.editing ?
          <Component value={value} onChange={this.handleChange} onClick={this.handleInputClick} /> :
          !Component && editable && this.props.editing ?
            <TextEditor value={value} onClick={this.handleInputClick} onChange={this.handleChange} onRelease={this.handleRelease} /> :
            value
        }
      </div>
    )
  }
}

export default connector(Cell)
