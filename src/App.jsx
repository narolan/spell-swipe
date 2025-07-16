import React from "react";
import './App.css'
import SwipeZone from "./components/swipeZone/SwipeZone.jsx";
import version from "./version";

const App = () => {
    return (
        <div className="cardContainer">
            <SwipeZone/>
            <span className="version">{version}</span>
        </div>
    )
}

export default App
