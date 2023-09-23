import React,{useState} from "react";


function InputArea(props) {
    const [task,setTask]=useState("");
    
    function handleChange(event) {
        setTask(event.target.value);
    }

    return (
        <div className="form">
            <input type="text" onChange={handleChange} value={task}/>
            <button onClick={()=>{
                props.addItem(task);
                setTask("");
            }}>
                <span>Add</span>
            </button>
    </div>
    );
}

export default InputArea;
