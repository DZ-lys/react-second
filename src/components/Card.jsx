const Card = (props) => {
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <div className="imageContainer"><img src={props.image} alt="" /></div>
            <p>{props.desc}</p>
        </div>
    );
};

export default Card;