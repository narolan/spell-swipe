import React from 'react';

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