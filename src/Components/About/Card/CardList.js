import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function CardList({card,title}) {
    return (
        <div className="Tikets">
            <div className="TiketsContainer">
            <h2>{title}</h2>
                <div className="CardConteiner">
                    {card.map((card)=>
                    <CardItem card={card} key={card.id}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardList
