import React from 'react'

const SponsorItem = (props) => {
    return (
        <div className="Sponsor">
            <img src={props.sponsor.img} />
        </div>
    )
}

export default SponsorItem
