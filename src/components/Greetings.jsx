import React from "react";

function Greetings() {
    const date = new Date(19,9,2023 , 17);
    const time = date.getHours();

    let text=""
    let obj={
        color:""
    }

    if(time<12){
        text = "Good Morning";
        obj.color  = "red";
    }else if (time < 18){
        text = "Good Afternoon";
        obj.color  = "green";
    }else{
        text = "Good Night";
        obj.color  = "blue";
    }
    return(
        <h1 style={obj}>{text}</h1>
    );
}

export default Greetings;