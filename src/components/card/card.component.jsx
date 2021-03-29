import React from 'react'
import './card.component.css'

const Card = props => {
    return (
        <div className="card">
            <img alt="profile" src={`https://robohash.org/${props.monstor.id}`} />
            <h2>{props.monstor.name}</h2>
            <p>{props.monstor.email}</p>
        </div>
    )
}

export default Card
