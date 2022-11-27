import React, { useState } from 'react'

const ToDoItem = (item, index) => {

    const[isDone, setIsDone]=useState(false);
    // strike through the done elements
    function doneHandler(){
    //  console.log(index);
    // console.log(item.id);
     setIsDone(!isDone);
    // setItems(items.filter((i)=>i.id !== setIsDone(!isDone)));
    }


    // delete the to-do after clicking on delete button
    function deleteHandler(item, index){
        console.log(index);
        // console.log(item.id);
        setItems(items.filter((i)=>i.id !== item.id));
        // setItems((item)=>item.splice(item.id,1));
      
    }    

  return (
    <div>
        <li  style={{textDecoration:isDone?"line-through":"none"}} >
       
       {item.todo} 
       <div className='btn-group'>
          <button 
            className="btn-done" 
            // onClick={doneHandler }
             >
            Done
            </button> 

           <button 
           className="btn-delete"
        //    onClick={()=> deleteHandler(item,index)}
            >
           Delete
          </button>
       </div>
     </li>
    </div>
  )
}

export default ToDoItem