import React, { useState } from "react";  
  

function App() {

  const [clr,setColor] = useState("white");
  const [name,setName] = useState("");
  const [showName,setShowName]=useState("")
  

  function mouseIn() {
    console.log("mouseIn");
    setColor("Black");
  }
  function onMouseOut() {
    console.log("onMouseOut");
    setColor("white");
  }

  function ReadValue(event) {
    setName(event.target.value);
  }

  function handleClicked(event) {
    setShowName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleClicked}>
        <h1>Hello {showName}</h1>
        <input type="text" placeholder="What's your name?" onChange={ReadValue} value={name}/>
        <button type="submit" style={{backgroundColor:clr}} onMouseOut={onMouseOut} onMouseOver={mouseIn} >Submit</button>
      </form>
    </div>
  );
}

export default App;
