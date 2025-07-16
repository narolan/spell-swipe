import React from 'react';
import './Card.css';

const Card = ({ name, style, showFeedback }) => {
    return (
        <div
            className={`card ${showFeedback === 'wrong' ? 'wrong' : ''}`}
            style={style}
        >
            <h3>{name}</h3>
        </div>
    )
}

export default Card