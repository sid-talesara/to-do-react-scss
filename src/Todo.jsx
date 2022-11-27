import React, { useState } from 'react'

const Todo = ({items, setItems,key,isDone, setIsDone}) => {


  // function doneHandler(item){
    // //  console.log(index);
    // // console.log(item.id);

// setItems(items.map((i)=>{
//   if(i.id===items.id) {
//     return{
//       ...item, isDone:!isDone
//     }}
//     else{
//   return item;
//     } 
// }
// )) 
// // setItems(items.filter((i)=>i.id !== setIsDone(!isDone)));
// }


// strike through the done elements
function doneHandler(){
  // setItems(items.map((i)=>{

  //   console.log(i)

  //   if(i.id===items.id){
  //     return(
  //       // ...i,isDone:!isDone
  // )

  //   }
  //   return i;
  // }))
  setIsDone(!isDone)
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
        <li  style={{textDecoration:isDone?"line-through":"none"}} >
       
        {item.todo} 
        <div className='btn-group'>
           <button 
             className="btn-done" 
             onClick={doneHandler }
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







