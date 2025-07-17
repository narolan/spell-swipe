import React from 'react';
import './EndScreen.css';
import '../card/Card.css';
import {updateHighScore} from "../../service/HighScoreService.js";

const EndScreen = ({onEnd, mode, attempts, total}) => {
    updateHighScore(mode, (total/attempts) * 1000);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card endCard">
                <h3>🎉 Done!</h3>
            </div>
            <button className="playButton" onClick={onEnd}>Main Menu</button>
        </div>
    )
}

export default EndScreen;