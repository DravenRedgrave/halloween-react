import React from 'react'
import witcher from '../../assets/witcher.png'
import './InfoSection.css'


function InfoSection(props) {

    const {item} = props;

    return (
        <div className="InfoBox">
            <div className="TexBox">
                <h1>{item.title}</h1>
                <h2>{item.subTitle}</h2>
                <a href="#">Sign up to party</a>
            </div>
            <div className="imgBox">
                <img src={witcher} />
            </div>
        </div>
    )
}

export default InfoSection
