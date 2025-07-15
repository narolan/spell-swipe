import React from 'react';
import '../App.css';

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