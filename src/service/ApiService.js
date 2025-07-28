function allClassSpells(selectedClass) {
    let classSpells;
    switch (selectedClass) {
        case 'Wizard':
            classSpells = ["Acid Splash", "Alarm", "Alter Self", "Animate Dead", "Arcane Eye", "Arcane Lock", "Blink", "Burning Hands", "Chain Lightning", "Charm Person", "Chromatic Orb", "Cloudkill", "Color Spray", "Comprehend Languages", "Counterspell", "Darkvision", "Detect Magic", "Detect Thoughts", "Disguise Self", "Disintegrate", "Dispel Magic", "Feather Fall", "Fireball", "Fly", "Fog Cloud", "Grease", "Greater Invisibility", "Haste", "Hold Monster", "Hold Person", "Identify", "Invisibility", "Knock", "Legend Lore", "Levitate", "Light", "Lightning Bolt", "Mage Armor", "Mage Hand", "Magic Missile", "Major Image", "Mirror Image", "Misty Step", "Phantasmal Killer", "Polymorph", "Ray of Enfeeblement", "Ray of Frost", "Scorching Ray", "See Invisibility", "Shield", "Shocking Grasp", "Sleep", "Spider Climb", "Suggestion", "Teleport", "Thunderwave", "Unseen Servant", "Wall of Fire", "Wall of Force", "Web", "Wish"];
            break;
        case 'Sorcerer':
            classSpells = ["Acid Splash", "Alter Self", "Burning Hands", "Charm Person", "Chromatic Orb", "Cloudkill", "Color Spray", "Comprehend Languages", "Counterspell", "Detect Magic", "Disguise Self", "Disintegrate", "Dispel Magic", "Feather Fall", "Fireball", "Fly", "Fog Cloud", "Greater Invisibility", "Haste", "Hold Person", "Invisibility", "Light", "Lightning Bolt", "Mage Armor", "Mage Hand", "Magic Missile", "Mirror Image", "Misty Step", "Phantasmal Killer", "Polymorph", "Ray of Enfeeblement", "Ray of Frost", "Scorching Ray", "Shield", "Shocking Grasp", "Sleep", "Spider Climb", "Suggestion", "Thunderwave", "Unseen Servant", "Wall of Fire", "Wall of Force", "Web", "Wish"];
            break;
        case 'Bard':
            classSpells = ["Charm Person", "Comprehend Languages", "Cure Wounds", "Detect Magic", "Disguise Self", "Dispel Magic", "Feather Fall", "Greater Invisibility", "Healing Word", "Heroism", "Hold Person", "Identify", "Invisibility", "Light", "Mage Hand", "Message", "Misty Step", "Phantasmal Killer", "Prestidigitation", "Shocking Grasp", "Sleep", "Suggestion", "Thunderwave", "Unseen Servant", "Vicious Mockery", "Zone of Truth", "Counterspell", "Mirror Image"];
            break;
        case 'Cleric':
            classSpells = ["Bane", "Bless", "Command", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Dispel Magic", "Flame Strike", "Guidance", "Healing Word", "Hold Person", "Inflict Wounds", "Light", "Mending", "Message", "Prayer of Healing", "Preserve Life", "Protection from Evil and Good", "Ray of Enfeeblement", "Remove Curse", "Resistance", "Revivify", "Sacred Flame", "Sanctuary", "Scrying", "Shield of Faith", "Spare the Dying", "Spirit Guardians", "Spiritual Weapon", "Thaumaturgy", "Zone of Truth", "Warding Bond", "Create Food and Water", "Daylight", "Death Ward", "Detect Poison and Disease", "Divine Word", "Mass Cure Wounds", "Mass Healing Word", "Guiding Bolt"]
            break;
        case 'Druid':
            classSpells = ["Animal Friendship", "Barkskin", "Call Lightning", "Conjure Animals", "Create or Destroy Water", "Cure Wounds", "Darkvision", "Detect Magic", "Detect Poison and Disease", "Dispel Magic", "Entangle", "Faerie Fire", "Flame Blade", "Flaming Sphere", "Goodberry", "Heat Metal", "Ice Storm", "Jump", "Lesser Restoration", "Light", "Longstrider", "Moonbeam", "Pass without Trace", "Plant Growth", "Poison Spray", "Protection from Energy", "Purify Food and Drink", "Resistance", "Scrying", "Shillelagh", "Speak with Animals", "Speak with Plants", "Spike Growth", "Thorn Whip", "Thunderwave", "Transport via Plants", "Wall of Thorns", "Water Breathing", "Wind Wall"]
            break;
        case 'Warlock':
            classSpells = ["Armor of Agathys", "Arms of Hadar", "Charm Person", "Cloud of Daggers", "Counterspell", "Darkness", "Darkvision", "Dispel Magic", "Eldritch Blast", "Fear", "Hellish Rebuke", "Hex", "Invisibility", "Mage Hand", "Mirror Image", "Misty Step", "Suggestion", "Thaumaturgy", "Witch Bolt"]
            break;
        case 'Paladin':
            classSpells = ["Bless", "Command", "Compelled Duel", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Divine Favor", "Heroism", "Lesser Restoration", "Protection from Evil and Good", "Purify Food and Drink", "Searing Smite", "Shield of Faith", "Thunderous Smite", "Wrathful Smite", "Zone of Truth", "Find Steed", "Magic Weapon", "Blinding Smite", "Dispel Magic"]
            break;
        case 'Ranger':
            classSpells = ["Alarm", "Animal Friendship", "Barkskin", "Conjure Animals", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Ensnaring Strike", "Fog Cloud", "Goodberry", "Hunter's Mark", "Jump", "Longstrider", "Pass without Trace", "Protection from Energy", "Spike Growth", "Water Breathing", "Wind Wall", "Darkvision", "Locate Object", "Silence"]
            break;
        default:
            classSpells = [];
            break;
    }
    return classSpells;
}

const fetchClassCards = (selectedClass) => {
    let classSpells = allClassSpells(selectedClass);

    const allSpellsSet = new Set();
    const classes = ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"];
    classes.forEach(cls => {
        let spells = allClassSpells(cls);
        spells.forEach(spell => {
            allSpellsSet.add(spell);
        })
    })

    const distractorPool = Array.from(allSpellsSet).filter(spell => !classSpells.includes(spell));

    const shuffled = distractorPool.sort(() => 0.5 - Math.random());
    const distractors = shuffled.slice(0, 30);

    const formattedClassSpells = classSpells.map(name => ({ name, correct: true }));
    const formattedDistractors = distractors.map(name => ({ name, correct: false }));

    return [...formattedClassSpells, ...formattedDistractors]
        .sort(() => 0.5 - Math.random());
}

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
    ].sort(() => Math.random() - 0.5)
}

export {
    getPersonalHighScores,
    saveHighScore,
    fetchAllCards,
    fetchClassCards
}