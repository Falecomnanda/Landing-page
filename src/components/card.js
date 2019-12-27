//card
import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
                <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;