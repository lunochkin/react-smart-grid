import React from 'react'


const InputNumber = props => {
  if (props.editMode) {
    return (
      <input 
        type='number'
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
      />
    )
  } else {
    return props.value
  }
}

export default InputNumber
