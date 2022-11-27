import React, { useState } from 'react'

const Todo = ({items, setItems}) => {



// // strike through the done elements
function doneHandler(item){
  setItems(items.map((i,index)=>{if(i.id===item.id){
    console.log(i);
  }}))
  // setIsDone(!isDone);
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
        <li key={index} style={{textDecoration:item.isDone?"line-through":"none"}} >
       
        {item.todo} 
        <div className='btn-group'>
           <button 
             className="btn-done" 
             onClick={()=> doneHandler(item)}
              >
             Done
             </button> 
 
            <button 
            className="btn-delete"
            onClick={()=> deleteHandler(item,index)}
             >
            Delete
           </button>
        </div>
      </li>
    );
    })} 
    
  </ul>
  )
}

export default Todo







