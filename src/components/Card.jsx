import React from "react";

function Card(props) {
    return(
        <div className="card ">
            <div className="top">
                <p className="name">{props.name}</p>
                <img src={props.imgUrl} alt="images" className="circle-img "/>
            </div>
            <div className="bottom">
            <p className="info ">{props.Country}</p>
            </div>
        </div>
    );
}

export default Card;