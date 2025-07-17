import React, {useState} from "react";
import './App.css'
import SwipeZone from "./components/swipeZone/SwipeZone.jsx";
import version from "./version";
import MainMenu from "./components/mainMenu/MainMenu.jsx";
import Highscore from "./components/score/Highscore.jsx";

const App = () => {

    const [screen, setScreen] = useState("menu");
    const [mode, setMode] = useState(null);

    return (
        <div className="cardContainer">
            {
                screen === "menu" && (
                    <MainMenu
                        onStartClassic={() => {
                            setMode("classic");
                            setScreen("game");
                        }}
                        onStartHardcore={() => {
                            setMode("hardcore");
                            setScreen("game");
                        }}
                        onShowScores={() => setScreen("scores")}
                    />
                )
            }
            {
                screen === "game" &&
                <SwipeZone
                    onEnd={() => {
                        setMode(null);
                        setScreen("menu");
                    }}
                    mode={mode}
                />
            }
            {
                screen === "scores" &&
                <Highscore onBack={() => setScreen("menu")}/>
            }
            <span className="version">{version}</span>
        </div>
    )
}

export default App
