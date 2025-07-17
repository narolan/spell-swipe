const getPersonalHighScores = () => {
    const json = localStorage.getItem("personalHighScores");

    try {
        return json ? JSON.parse(json) : {};
    } catch {
        return {};
    }
}

const saveHighScore = (mode, score) => {
    let scores = getPersonalHighScores();
    scores[mode] = score;
    localStorage.setItem("personalHighScores", JSON.stringify(scores));
}

export {
    getPersonalHighScores,
    saveHighScore,
}