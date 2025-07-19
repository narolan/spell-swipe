import React from 'react';
import './InstallPrompt.css';

const InstallPrompt = ({ onInstall, onDismiss }) => (
    <div className="install-prompt">
        <p>🛡️ Install Spell Swipe for a better experience?</p>
        <div className="buttons">
            <button onClick={onInstall}>Yes, install</button>
            <button onClick={onDismiss}>No thanks</button>
        </div>
    </div>
);

export default InstallPrompt;
