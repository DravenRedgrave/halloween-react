import React from 'react'
import './Card.css'
import castle from '../../assets/Castle.png';

const CardItem = (props) => {
    return (
        <div className="Card">
            <div className="CardContent">
                <h3>{props.card.currency}{props.card.price}</h3>
                <h4>{props.card.title}</h4>
                <p>{props.card.subText}</p>
            </div>
            <div className="CardImg">
                <img src={castle}/>;
                </div>
        </div>
    )
}

export default CardItem
