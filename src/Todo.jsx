import React, { useState } from 'react'

const Todo = ({items, setItems, textInput,key}) => {
const[isDone, setIsDone]=useState(false);

// strike through the done elements
function doneHandler(){
//  console.log(index);
// console.log(item.id);
setIsDone(true);

}
// delete the to-do after clicking on delete button
function deleteHandler(item, index){
    console.log(index);
    // console.log(item.id);
    setItems(items.filter((i)=>i.id !== item.id));
    // setItems((item)=>item.splice(item.id,1));
  
    

}
  return ( 
    <ul> 
    {items.map((item,index)=>{
      return(
      <li className={isDone?'done':null} >
       
        {item.todo} 
        <div className='btn-group'>
           <button 
            // value={item.todo} 
            // index={index} 
            className="btn-done" 
            onClick={doneHandler } >
             Done
             </button> 
            <button 
            // value={items.todo} 
            // index={index} 
            className="btn-delete"
            onClick={()=> deleteHandler(item,index)} >
                Delete
                </button>
        </div>
      </li>
    )})} 
    
  </ul>
  )
}

export default Todo







