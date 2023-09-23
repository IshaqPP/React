import React, { useState } from "react";  
import ToDoList from "./ToDoList";
import InputArea from "./InputArea";
  
function App() {
  const [list,setList]=useState([]);

  function handleclick(task) {
    setList((prevItems)=>{
      return (
        [...prevItems,task]
      );
    });
    
  }

  function deleteTask(id) {
    console.log("u r in deleteTask",id);
    setList((prevTasks)=>{
      return prevTasks.filter((task,index)=>{
        if(id !== index)
          return task
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={handleclick}/>
      <div>
        <ul>
        {list.map((task,index)=>{
          return <ToDoList key={index} id={index} item={task} delete={deleteTask}/>
        })}
        
        </ul>
      </div>
    </div>
  );
}

export default App;
