const changeCharacter = (key, value) => {
    return {
        type: "CHANGE",
        key: key,
        value: value
    }
}

export const addInventoryItem = () => {
    return {
        type: "ADD_INVENTORY_ITEM",
        id: Date.now(),
        text: ""
    }
}

export const deleteInventoryItem = (id) => {
    return {
        type: "DELETE_INVENTORY_ITEM",
        id: id
    }
}

export const changeInventoryItem = (id, text) => {
    return {
        type: "CHANGE_INVENTORY_ITEM",
        id: id,
        text: text
    }
}

export default changeCharacter;
