import React from 'react';
import './MainMenu.css'

const MainMenu = ({onStartClassic, onStartHardcore, onShowScores}) => {
    return (
        <div className="mainMenu">
            <h2 className="mainMenuTitle">
                DnDinder<br/>
                <span className="mainMenuDash">-</span><br/>
                Spell Swipe
            </h2>
            <h3 className="mainMenuSubTitle">Is it a DnD Spell or is it a metalband?</h3>
            <button className="playButton" onClick={onStartClassic}>Classic</button>
            <button className="playButton" onClick={onStartHardcore}>Hardcore</button>
            <button className="playButton" onClick={onShowScores}>Personal Highscores</button>
        </div>
    )
}

export default MainMenu;