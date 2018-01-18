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

    return (
      <div
        className="rsg-cell rsg-body-cell"
        style={{left, width}}
        onDoubleClick={this.handleDoubleClick}
      >
        {this.props.editing ?
          <TextEditor value={value} onChange={this.handleChange} onRelease={this.handleRelease} />
          :
          value
        }
      </div>
    )
  }
}


export default connector(Cell)
