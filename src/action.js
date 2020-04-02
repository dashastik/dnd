const changeCharacter = (key, value) => {
    return {
        type: "CHANGE",
        key: key,
        value: value
    }
}

export default changeCharacter;
