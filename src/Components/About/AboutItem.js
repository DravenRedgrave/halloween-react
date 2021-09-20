import React from 'react'
import './About.css'
const AboutItem = (props) => {
    return (
        <div className="AboutFlex">
            <div className="AboutBoxText">
            <h2>{props.about.title}</h2>
            <p>{props.about.subText}</p>
        </div>
        <div className="AboutBoxImg">
            <img src={props.about.img}/>
        </div>
        </div>
    )
}

export default AboutItem
