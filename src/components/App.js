import React from "react";
import Contact from "../Contact";
import Card from "./Card";

function App() {
  console.log(Contact);
  return (
    <div>
      <header className="heading">My Contacts</header>
      <Card
       name={Contact[0].name}
       imgUrl={Contact[0].imgUrl}
       Country={Contact[0].Country}
       />
       <Card
       name={Contact[1].name}
       imgUrl={Contact[1].imgUrl}
       Country={Contact[1].Country}
       />
       <Card
       name={Contact[2].name}
       imgUrl={Contact[2].imgUrl}
       Country={Contact[2].Country}
       />
        
    </div>
  );
}

export default App;
