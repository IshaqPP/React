import React, { useState } from "react";  
  

function App() {

  const [clr,setColor] = useState("white");
  const [contact,setContact]=useState({
    fName:"",
    lName:"",
    email:""
  })
  
  function mouseIn() {
    console.log("mouseIn");
    setColor("Black");
  }
  function onMouseOut() {
    console.log("onMouseOut");
    setColor("white");
  }

  function ReadName(event) {
    const {name,value}=event.target;

    setContact((preValue)=>{
      if (name === "fName") {
        return({
          fName:value,
          lName:preValue.lName,
          email:preValue.email
        })
      } else if(name === "lName"){
        return({
          fName:preValue.fName,
          lName:value,
          email:preValue.email
        })
      }else if(name === "email"){
        return({
          fName:preValue.fName,
          lName:preValue.lName,
          email:value
        })
      }


    })

  }



  return (
    <div className="container">
    <h1>
      Hello {contact.fName} {contact.lName}
    </h1>
    <p>{contact.email}</p>
    <form>
      <input name="fName" placeholder="First Name" onChange={ReadName}/>
      <input name="lName" placeholder="Last Name" onChange={ReadName} />
      <input name="email" placeholder="Email" onChange={ReadName}/>
      <button style={{backgroundColor:clr}} onMouseOut={onMouseOut} onMouseOver={mouseIn}>Submit</button>
    </form>
  </div>
  );
}

export default App;
