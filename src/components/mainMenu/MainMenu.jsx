import React from 'react';
import './MainMenu.css'

const MainMenu = ({ onStartClassic }) => {
    return (
        <div className="mainMenu">
            <h2 className="mainMenuTitle">DnDinder - Spell Swipe</h2>
            <h3 className="mainMenuSubTitle">Is it a DnD Spell or is it a metalband?</h3>
            <button className="playButton" onClick={onStartClassic}>Play</button>
        </div>
    )
}

export default MainMenu;