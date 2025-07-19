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

const fetchAllCards = () => {
    return [
        {"name": "Amon Amarth", "type": "band"},
        {"name": "Arms of Hadar", "type": "spell"},
        {"name": "Banishment", "type": "spell"},
        {"name": "Battlecross", "type": "band"},
        {"name": "Behemoth", "type": "band"},
        {"name": "Belphegor", "type": "band"},
        {"name": "Blight", "type": "spell"},
        {"name": "Blind Guardian", "type": "band"},
        {"name": "Burning Hands", "type": "spell"},
        {"name": "Carnifex", "type": "band"},
        {"name": "Chaos Bolt", "type": "spell"},
        {"name": "Chill Touch", "type": "spell"},
        {"name": "Cloudkill", "type": "spell"},
        {"name": "Command", "type": "spell"},
        {"name": "Contagion", "type": "spell"},
        {"name": "Crown of Madness", "type": "spell"},
        {"name": "Dark Funeral", "type": "band"},
        {"name": "Darkthrone", "type": "band"},
        {"name": "Death Angel", "type": "band"},
        {"name": "Destruction", "type": "band"},
        {"name": "Disintegrate", "type": "spell"},
        {"name": "Dying Fetus", "type": "band"},
        {"name": "Earth Tremor", "type": "spell"},
        {"name": "Eldritch Blast", "type": "spell"},
        {"name": "Enslaved", "type": "band"},
        {"name": "Exodus", "type": "band"},
        {"name": "Finger of Death", "type": "spell"},
        {"name": "Fireball", "type": "spell"},
        {"name": "Flame Blade", "type": "spell"},
        {"name": "Fleshgod Apocalypse", "type": "band"},
        {"name": "Goatwhore", "type": "band"},
        {"name": "Graveworm", "type": "band"},
        {"name": "Guiding Bolt", "type": "spell"},
        {"name": "Hellish Rebuke", "type": "spell"},
        {"name": "Immolation", "type": "band"},
        {"name": "Incantation", "type": "band"},
        {"name": "Inflict Wounds", "type": "spell"},
        {"name": "Lorna Shore", "type": "band"},
        {"name": "Magic Missile", "type": "spell"},
        {"name": "Morbid Angel", "type": "band"},
        {"name": "Nightbringer", "type": "band"},
        {"name": "Obituary", "type": "band"},
        {"name": "Phantasmal Killer", "type": "spell"},
        {"name": "Possessed", "type": "band"},
        {"name": "Power Word Kill", "type": "spell"},
        {"name": "Ray of Enfeeblement", "type": "spell"},
        {"name": "Scorching Ray", "type": "spell"},
        {"name": "Shield", "type": "spell"},
        {"name": "Skeletonwitch", "type": "band"},
        {"name": "Soulburn", "type": "band"},
        {"name": "Spiritual Weapon", "type": "spell"},
        {"name": "Suffocation", "type": "band"},
        {"name": "Thunderwave", "type": "spell"},
        {"name": "Vader", "type": "band"},
        {"name": "Vampiric Touch", "type": "spell"},
        {"name": "Venom", "type": "band"},
        {"name": "Watain", "type": "band"},
        {"name": "Winterfylleth", "type": "band"},
        {"name": "Witch Bolt", "type": "spell"},
        {"name": "Wrathful Smite", "type": "spell"}
    ]
}

export {
    getPersonalHighScores,
    saveHighScore,
    fetchAllCards
}