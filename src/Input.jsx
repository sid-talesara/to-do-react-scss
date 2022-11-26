import React from 'react'

const Input = ({textInput, itemEvent, listOfItems}) => {
  return (
    <div>
      <input 
      type="text" 
      placeholder='Add to-do' 
      value={textInput}
      // defaultValue={textInput} 
      onChange={itemEvent}  />
      <button onClick={listOfItems}>+</button>

    </div>
  )
}

export default Input