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
    modifierMasteryBonus: 0,

    inventory: [

    ]
}

const character = (state = initState, action) => {
    if (action.type === "CHANGE") {
        return { ...state, [action.key]: action.value }
    }
    else if (action.type === "ADD_INVENTORY_ITEM") {
        const item = { id: action.id, text: action.text }
        return { ...state, inventory: [...state.inventory, item] }
    }
    else if (action.type === "DELETE_INVENTORY_ITEM") {
        const id = action.id
        return {
            ...state, inventory: state.inventory.filter((item) => {
                return item.id !== id
            })
        }
    }
    else if (action.type === "CHANGE_INVENTORY_ITEM") {
        const text = action.text
        const id = action.id
        return {...state, inventory: state.inventory.map((item) => {
            if (item.id === id) {
                item.text = text
            }
            return item
        })}
    }
    return state
}


export default character;
