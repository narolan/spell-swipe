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
        { "name": "Blight", "type": "spell" },
        { "name": "Obituary", "type": "band" },
        { "name": "Crown of Madness", "type": "spell" },
        { "name": "Amon Amarth", "type": "band" },
        { "name": "Phantasmal Killer", "type": "spell" },
        { "name": "Nightbringer", "type": "band" },
        { "name": "Hellish Rebuke", "type": "spell" },
        { "name": "Behemoth", "type": "band" },
        { "name": "Contagion", "type": "spell" },
        { "name": "Dark Fortress", "type": "band" },
        { "name": "Power Word Kill", "type": "spell" },
        { "name": "Incantation", "type": "band" },
        { "name": "Chaos Bolt", "type": "spell" },
        { "name": "Witchery", "type": "band" },
        { "name": "Cloudkill", "type": "spell" },
        { "name": "Necrophagia", "type": "band" },
        { "name": "Arms of Hadar", "type": "spell" },
        { "name": "Darkthrone", "type": "band" },
        { "name": "Thunderwave", "type": "spell" },
        { "name": "Cloak", "type": "band" },
        { "name": "Guiding Bolt", "type": "spell" },
        { "name": "Venom", "type": "band" },
        { "name": "Chill Touch", "type": "spell" },
        { "name": "Winterfylleth", "type": "band" },
        { "name": "Magic Missile", "type": "spell" },
        { "name": "Enthroned", "type": "band" },
        { "name": "Banishment", "type": "spell" },
        { "name": "Possessed", "type": "band" },
        { "name": "Ray of Enfeeblement", "type": "spell" },
        { "name": "Sear Bliss", "type": "band" },
        { "name": "Spiritual Weapon", "type": "spell" },
        { "name": "Belphegor", "type": "band" },
        { "name": "Burning Hands", "type": "spell" },
        { "name": "Skeletonwitch", "type": "band" },
        { "name": "Disintegrate", "type": "spell" },
        { "name": "Watain", "type": "band" },
        { "name": "Vampiric Touch", "type": "spell" },
        { "name": "Marduk", "type": "band" },
        { "name": "Command", "type": "spell" },
        { "name": "Lorna Shore", "type": "band" },
        { "name": "Flame Blade", "type": "spell" },
        { "name": "Graveworm", "type": "band" },
        { "name": "Inflict Wounds", "type": "spell" },
        { "name": "Suffocation", "type": "band" },
        { "name": "Fireball", "type": "spell" },
        { "name": "Exodus", "type": "band" },
        { "name": "Shield", "type": "spell" },
        { "name": "Death Angel", "type": "band" },
        { "name": "Scorching Ray", "type": "spell" },
        { "name": "Moonspell", "type": "band" },
        { "name": "Earth Tremor", "type": "spell" },
        { "name": "Eldritch Blast", "type": "spell" },
        { "name": "Enslaved", "type": "band" },
        { "name": "Wrathful Smite", "type": "spell" },
        { "name": "Obscura", "type": "band" },
        { "name": "Flames of Perdition", "type": "band" },
        { "name": "Dark Funeral", "type": "band" },
        { "name": "Finger of Death", "type": "spell" },
        { "name": "Scarab", "type": "band" },
        { "name": "Soulburn", "type": "band" }
    ]
}

export {
    getPersonalHighScores,
    saveHighScore,
    fetchAllCards
}