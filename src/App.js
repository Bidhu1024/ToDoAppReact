import { React, useState } from "react";
import ToDoLists from "./ToDoLists";
import './App.css'
function App() {
  const [inputList, setInputList] = useState(null);
  const [items,setItems] = useState([]);
const itemEvent = (event) =>{
setInputList(event.target.value)
}
const listOfItems =()=>{
      setItems((oldItems)=>{
        return [...oldItems, inputList]
       
      });
      setInputList('')
}
const deleteItems =(id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
      return index!==id;
    })
  })
}
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items" value = {inputList} onChange={itemEvent} />
          <button onClick = {listOfItems}> + </button>

          <ol>
           {items.map((itemvalue,index)=>{
          return  <ToDoLists key={index} id={index} text = {itemvalue}
            onSelect = {deleteItems}          />
           })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
