import React,{useState} from "react";

function App() {
  let [count,setCount]=useState(0);

  function increase() {
    console.log("increase");
    setCount(count+1);
  }
  
  function decrease() {
    console.log("decrease");
    setCount(count-1);
  
  }
  
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
