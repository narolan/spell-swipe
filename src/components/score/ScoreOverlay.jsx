import React from 'react';
import './Score.css';

const ScoreOverlay = ({score, attempts, total}) => {
    return (
        <div className="scoreOverlay">
            <span>Score: {score} / {total}</span>
            <br/>
            <span>Total attempts: {attempts}</span>
        </div>
    );
};

export default ScoreOverlay;