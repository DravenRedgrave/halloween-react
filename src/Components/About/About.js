import React from 'react'
import AboutItem from './AboutItem'
import './About.css'

function About({about}) {
    return (
        <div className="About">
            <div className="AboutContainer">
            {about.map((about)=>
                    <AboutItem about={about} key={about.id}/>
                    )}
            </div>
        </div>
    )
}

export default About
