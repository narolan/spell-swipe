import React, {useState} from "react";
import './App.css'
import SwipeZone from "./components/swipeZone/SwipeZone.jsx";
import version from "./version";
import MainMenu from "./components/mainMenu/MainMenu.jsx";
import Highscore from "./components/score/Highscore.jsx";
import { registerSW } from "virtual:pwa-register";

registerSW({
    onRegisteredSW(swUrl, registration) {
        if (registration && registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            window.location.reload();
        }

        registration?.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                       console.log("reloading")
                        window.location.reload();
                    }
                });
            }
        });
    }
});

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
