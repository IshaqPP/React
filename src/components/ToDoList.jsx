import React from "react";

function ToDoList(props) {
    
    return(
        <div>
            <li  onClick={()=>{props.delete (props.id)}} key={props.id}>{props.item}</li>
        </div>
    );
}

export default ToDoList;