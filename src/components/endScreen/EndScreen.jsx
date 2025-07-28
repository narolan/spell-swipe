import React from 'react';
import './EndScreen.css';
import '../card/Card.css';
import {updateHighScore} from "../../service/HighScoreService.js";

const EndScreen = ({onEnd, mode, attempts, total, score, selectedClass}) => {
    let newScore = 0;
    if (["classic", "class"].includes(mode)) {
        newScore = Math.round((total / attempts) * 1000);
    } else if (mode === "hardcore") {
        if (score !== 0) {
            newScore = Math.round((score / total) * 1000);
        }
    }
    updateHighScore(mode, newScore, selectedClass);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <div className="card endCard" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                <h3>🎉 Done!</h3>
                <p className="scoreLine">
                    Your score: <span className="scoreHighlight">{newScore}</span> / 1000
                </p>
            </div>
            <button className="playButton" onClick={onEnd}>Main Menu</button>
        </div>
    )
}

export default EndScreen;