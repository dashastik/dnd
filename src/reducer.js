const initState = {
    characterName: '',
    class: '',
    level: 0,
    background: '',
    playerName: '',
    race: '',
    ideology: '',
    masteryBonus: 0,

    strength: 0,
    strengthSave: false,
    athletics: false,

    dexterity: 0,
    dexteritySave: false,
    acrobatics: false,
    sleightOfHand: false,
    stealth: false,

    construction: 0,
    constructionSave: false,

    intelligence: 0,
    intelligenceSave: false,
    investigation: false,
    history: false,
    arcana: false,
    nature: false,
    religion: false,

    wisdom: 0,
    wisdomSave: false,
    perception: false,
    survival: false,
    medicine: false,
    insight: false,
    animalHandling: false,

    charisma: 0,
    charismaSave: false,
    performance: false,
    intimidation: false,
    deception: false,
    persuasion: false,
    modifierMasteryBonus: 0
}

const character = (state = initState, action) => {
    if (action.type === "CHANGE") {
        return { ...state, [action.key]: action.value }
    }
    return state
}

export default character;
