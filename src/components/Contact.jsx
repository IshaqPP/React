function Contact(props) {
    return(
        <div className="card ">
            <p>{props.name}</p>
            <img src={props.imgUrl} alt="images" className="circle-img "/>
            <p className="info ">{props.Country}</p>
        </div>
    );
}

export default Contact;