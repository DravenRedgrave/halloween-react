import React from 'react'
import SponsorItem from './SponsorItem'
import './Sponsor.css'

function SponsorList({sponsor,title}) {
    return (
        <div className="SponsorConteiner">
            <div className="SponsorContent">
                <h2>{title}</h2>
                <div className="SponsorFlex">
                    {
                    sponsor.map((sponsor) => 
                    <SponsorItem sponsor={sponsor} key={sponsor.id} />
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default SponsorList
