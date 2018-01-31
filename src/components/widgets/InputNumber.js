import React from 'react'


const InputNumber = props => (
  <input 
    type='number'
    value={props.value}
    onChange={props.onChange}
    onClick={props.onClick}
  />
)

export default InputNumber
