import React, { useState } from "react";  
  
function App() {
  const [list,setList]=useState([]);
  const [task,setTask]=useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleclick() {
    setList((prevItems)=>{
      return (
        [...prevItems,task]
      );
    });
    setTask("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={task}/>
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {list.map((task)=>{
          return(<li>{task}</li>);
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
