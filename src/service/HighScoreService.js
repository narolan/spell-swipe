import { getPersonalHighScores, saveHighScore } from './ApiService.js';

export async function getAllHighScores() {
    return await getPersonalHighScores();
}

export async function getHighScore(mode) {
    const allHighScores = await getAllHighScores();
    return allHighScores[mode];
}

export async function updateHighScore(mode, newScore, selectedClass) {
    let allHighScores = await getAllHighScores();

    let current;
    if (selectedClass) {
        current = allHighScores[selectedClass];
        mode = selectedClass;
    } else {
        current = allHighScores[mode];
    }
    if (!current || newScore > current) {
        await saveHighScore(mode, newScore);
    }
}