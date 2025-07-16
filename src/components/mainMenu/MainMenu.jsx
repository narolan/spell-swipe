import React from 'react';
import './MainMenu.css'

const MainMenu = ({ onStart }) => {
    return (
        <div className="mainMenu">
            <h2 className="mainMenuTitle">DnDinder - Spell Swipe</h2>
            <h3 className="mainMenuSubTitle">Is it a DnD Spell or is it a metalband?</h3>
            <button className="playButton" onClick={onStart}>Play</button>
        </div>
    )
}

export default MainMenu;