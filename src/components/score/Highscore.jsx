import React, {useEffect, useState} from 'react';
import {getAllHighScores} from '../../service/HighScoreService';
import './Highscore.css';

const MODES = [
    {key: 'classic', name: 'Classic', max: 1000},
    {key: 'hardcore', name: 'Hardcore', max: 1000},
    {key: 'Bard', name: 'Bard', max: 1000},
    {key: 'Cleric', name: 'Cleric', max: 1000},
    {key: 'Druid', name: 'Druid', max: 1000},
    {key: 'Paladin', name: 'Paladin', max: 1000},
    {key: 'Ranger', name: 'Ranger', max: 1000},
    {key: 'Sorcerer', name: 'Sorcerer', max: 1000},
    {key: 'Warlock', name: 'Warlock', max: 1000},
    {key: 'Wizard', name: 'Wizard', max: 1000},
];

const Highscore = ({onBack}) => {
    const [scores, setScores] = useState({});

    useEffect(() => {
        getAllHighScores().then(setScores);
    }, []);

    return (
        <div className="highscoreScreen">
            <h2 className="screenTitle">Your Personal Highscores</h2>
            <div className="scoreCardScrollArea">
                <div className="scoreCardContainer">
                    {MODES.map(({key, name, max}) => {
                        const score = scores[key] ?? 0;
                        return (
                            <div className="scoreCard" key={key}>
                                <h3 className="modeTitle">{name}</h3>
                                <p className="scoreText">
                                    <span className="scoreValue">{score}</span>
                                    <span className="scoreDivider"> / </span>
                                    <span className="scoreMax">{max}</span>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className="secondaryButton fixedBackButton" onClick={onBack}>Back</button>
        </div>
    );
};

export default Highscore;
