import React from "react";
import CircleImg from "./CircleImg";
import Details from "./Details";

function Card(props) {
    return(
        <div className="card ">
            <div className="top">
                <p className="id">{props.id}</p>
                <h2 className="name">{props.name}</h2>
                <CircleImg imgUrl={props.imgUrl}/>
            </div>
            <div className="bottom">
            <Details data={props.Country}/>
            <Details data={props.team}/>
            </div>
        </div>
    );
}

export default Card;