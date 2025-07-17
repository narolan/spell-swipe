import React, {useState} from "react";
import './App.css'
import SwipeZone from "./components/swipeZone/SwipeZone.jsx";
import version from "./version";
import MainMenu from "./components/mainMenu/MainMenu.jsx";

const App = () => {

    const [mode, setMode] = useState(null);

    return (
        <div className="cardContainer">
            {
                mode === null ?
                    <MainMenu
                        onStartClassic={() => setMode("classic")}
                    />
                    :
                    <SwipeZone
                        onEnd={() => setMode(null)}
                        mode={mode}
                    />
            }
            <span className="version">{version}</span>
        </div>
    )
}

export default App
