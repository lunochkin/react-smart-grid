import React from 'react'


const InputDate = props => {
  if (props.value.search(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g) !== 0) {
    console.warn(`Invalid date format '${props.value}', should be 'yyyy-mm-dd'`)
  }
  return (
    <input
      type='date'
      value={props.value}
      onChange={props.onChange}
      onClick={props.onClick}
    />
  )
}

export default InputDate
