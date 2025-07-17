import { getPersonalHighScores, saveHighScore } from './ApiService.js';

export async function getAllHighScores() {
    return await getPersonalHighScores();
}

export async function getHighScore(mode) {
    const allHighScores = await getAllHighScores();
    return allHighScores[mode];
}

export async function updateHighScore(mode, newScore) {
    let allHighScores = await getAllHighScores();
    newScore = Math.round(newScore);
    const current = allHighScores[mode];
    if (!current || newScore > current) {
        await saveHighScore(mode, newScore);
    }
}