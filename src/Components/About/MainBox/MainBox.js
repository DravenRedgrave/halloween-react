import React from 'react'
import InfoSection from '../InfoSection/InfoSection'
import NavBar from '../NavBar/NavBar'
import './MainBox.css'


const item = {
    title: 'october 31, Melbourne',
    subTitle: 'halloween party'
}

function MainBox() {
    return (
        <div className="MainBox">
            <NavBar/>
            <InfoSection item={item}/>
        </div>
    )
}

export default MainBox
