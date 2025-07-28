import React from 'react';
import './MainMenu.css';

const classes = ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"];

export function ClassSelect({ onSelect, onBack }) {
    return (
        <div className="mainMenu">
            <h2 className="mainMenuTitle">Choose a Class</h2>
            {classes.map(cls => (
                <button className="playButton" key={cls} onClick={() => onSelect(cls)}>
                    {cls}
                </button>
            ))}
            <button className="secondaryButton fixedBackButton" onClick={onBack}>Back</button>
        </div>
    );
}
