import React, { useState, useEffect } from "react";
import './App.css'
import SwipeZone from "./components/swipeZone/SwipeZone.jsx";
import version from "./version";
import MainMenu from "./components/mainMenu/MainMenu.jsx";
import Highscore from "./components/score/Highscore.jsx";
import InstallPrompt from "./components/installPrompt/InstallPrompt.jsx";
import {registerSW} from "virtual:pwa-register";

registerSW({
    onRegisteredSW(swUrl, registration) {
        if (registration && registration.waiting) {
            registration.waiting.postMessage({type: 'SKIP_WAITING'});
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
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallPrompt, setShowInstallPrompt] = useState(false);

    useEffect(() => {
        const installDeclined = localStorage.getItem("installDeclined");

        const handler = (e) => {
            if (installDeclined) return; // user already said no
            e.preventDefault(); // prevent the browser prompt
            setDeferredPrompt(e);
            setShowInstallPrompt(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const {outcome} = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
            console.log("✅ User accepted install");
        } else {
            console.log("❌ User declined install");
            localStorage.setItem("installDeclined", "true");
        }
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
    };

    const handleDismiss = () => {
        localStorage.setItem("installDeclined", "true");
        setShowInstallPrompt(false);
    };


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
            {
                showInstallPrompt && (
                    <InstallPrompt onInstall={handleInstall} onDismiss={handleDismiss}/>
                )
            }
            <span className="version">{version}</span>
        </div>
    )
}

export default App
