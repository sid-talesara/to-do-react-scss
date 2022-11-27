import { useState } from 'react'
import './style/app.scss'
import Todo from './Todo';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';

function App() {
// isDone for styling
// const[isDone, setIsDone]=useState(false);

// To-do Input state
const [textInput, setInput]= useState("");
//  individual items state [to-do]
const [items, setItems]=useState([]);

// To have textInput set in setInputList array
function itemEvent(x){
  x.preventDefault();
  setInput(x.target.value);
  
}
//  function to clear the input and add it to UI
function listOfItems(){
  // updates the array
  setItems(()=>{return [...items,{todo:textInput, id:uuidv4(), isDone:false}];})
// clears the input field 
  setInput("");
};


return (
    <div className="main-div">
      <div className="to-do-div">
    <div className="center-div">
      <br /> <h1>To-Do-List</h1>  <br />
      <Input
      items={items} 
       textInput={textInput}  
       itemEvent={itemEvent} 
       listOfItems={listOfItems}
      
      // key={uuidv4()}
        />
     <Todo 
     items={items} 
     setItems={setItems}
     key={items.id}
    //  isDone={isDone}
    //  setIsDone={setIsDone}
     />
    </div>
    </div>
    </div>
  )
}

export default App
 