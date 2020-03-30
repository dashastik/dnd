import React, { Component } from 'react';

class Form extends Component {

    state = {
        characterName: '',
        class: '',
        level: '',
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

    }

    handleChange = e => {
        let key = e.target.getAttribute("state_key");
        let value = undefined;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        } else if (e.target.type === "number") {
            value = Number(e.target.value);
        } else {
            value = e.target.value;
        }
        let newState = {};
        newState[key] = value;
        this.setState(newState);
    }

    render() {
        return (
            <div>

                <div>
                    <label>Имя персонажа </label>
                    <input type="text" placeholder="Введите значение" state_key="characterName" value={this.state.characterName} onChange={this.handleChange} />
                </div>


                <div>
                    <label>Класс </label>
                    <input type="text" placeholder="Введите значение" state_key="class" value={this.state.class} onChange={this.handleChange} />
                </div>


                <div>
                    <label>Уровень </label>
                    <input type="number" min="0" placeholder="Введите значение" state_key="level" value={this.state.level} onChange={this.handleChange} />
                </div>


                <div><label>Предыстория </label>
                    <input type="text" placeholder="Введите значение" state_key="background" value={this.state.background} onChange={this.handleChange} />
                </div>


                <div>
                    <label>Имя игрока </label>
                    <input type="text" placeholder="Введите значение" state_key="playerName" value={this.state.playerName} onChange={this.handleChange} />
                </div>


                <div>
                    <label>Раса </label>
                    <input type="text" placeholder="Введите значение" state_key="rase" value={this.state.race} onChange={this.handleChange} />
                </div>


                <div>
                    <label>Мировоззрение </label>
                    <input type="text" placeholder="Введите значение" state_key="ideology" value={this.state.ideology} onChange={this.handleChange} />
                </div>



                <div>
                    <label>Бонус мастерства </label>
                    <input type="number" min="0" placeholder="Введите значение" state_key="masteryBonus" value={this.state.masteryBonus} onChange={this.handleChange} />
                </div>



                <div>
                    <label>Сила </label>
                    <input type="number" min="0" placeholder="Введите значение" state_key="strength" value={this.state.strength} onChange={this.handleChange} />
                </div>

                <div>
                    <label>
                        <input type="checkbox" state_key="strengthSave" checked={this.state.strengthSave} onChange={this.handleChange} />Спасбросок
                </label>
                    <label>
                        <input type="checkbox" state_key="athletics" checked={this.state.athletics} onChange={this.handleChange} />Атлетика
                </label>
                </div>


                <div>
                    <label>Ловкость </label>
                    <input type="number" min="0" placeholder="Введите значение" state_key="dexterity" value={this.state.dexterity} onChange={this.handleChange} />
                </div>

                <div>
                    <label>
                        <input type="checkbox" state_key="dexteritySave" checked={this.state.dexteritySave} onChange={this.handleChange} />Спасбросок
                </label>
                    <label>
                        <input type="checkbox" state_key="acrobatics" checked={this.state.acrobatics} onChange={this.handleChange} />Акробатика
                </label>
                    <label>
                        <input type="checkbox" state_key="sleightOfHand" checked={this.state.sleightOfHand} onChange={this.handleChange} />Ловкость рук
                </label>
                    <label>
                        <input type="checkbox" state_key="stealth" checked={this.state.stealth} onChange={this.handleChange} />Скрытность
                </label>
                </div>


                <div>
                    <label>Телосожение </label>
                    <input type="number" min="0" placeholder="Введите значение" state_key="construction" value={this.state.construction} onChange={this.handleChange} />
                </div>

                <div>
                    <label>
                        <input type="checkbox" state_key="constructionSave" checked={this.state.constructionSave} onChange={this.handleChange} />Спасбросок
                </label>
                </div>


                <div>
                    <label>Интеллект </label>
                    <input type="number" min="0" placeholder="Введите значение" value={this.state.intelligence} onChange={this.handleChange} />
                </div>

                <div>
                    <label>
                        <input type="checkbox" state_key="intelligenceSave" checked={this.state.intelligenceSave} onChange={this.handleChange} />Спасбросок
                </label>
                    <label>
                        <input type="checkbox" state_key="investigation" checked={this.state.investigation} onChange={this.handleChange} />Анализ
                </label>
                    <label>
                        <input type="checkbox" state_key="history" checked={this.state.history} onChange={this.handleChange} />История
                </label>
                    <label>
                        <input type="checkbox" state_key="arcana" checked={this.state.arcana} onChange={this.handleChange} />Магия
                </label>
                    <label>
                        <input type="checkbox" state_key="nature" checked={this.state.nature} onChange={this.handleChange} />Природа
                </label>
                    <label>
                        <input type="checkbox" state_key="religion" checked={this.state.religion} onChange={this.handleChange} />Религия
                </label>
                </div>


                <div>
                    <label>Мудрость </label>
                    <input type="number" min="0" placeholder="Введите значение" state_key="wisdom" value={this.state.wisdom} onChange={this.handleChange} />
                </div>

                <div>
                    <label>
                        <input type="checkbox" state_key="wisdomSave" checked={this.state.wisdomSave} onChange={this.handleChange} />Спасбросок
                </label>
                    <label>
                        <input type="checkbox" state_key="perception" checked={this.state.perception} onChange={this.handleChange} />Внимательность
                </label>
                    <label>
                        <input type="checkbox" state_key="survival" checked={this.state.survival} onChange={this.handleChange} />Выживание
                </label>
                    <label>
                        <input type="checkbox" state_key="medicine" checked={this.state.medicine} onChange={this.handleChange} />Медицина
                </label>
                    <label>
                        <input type="checkbox" state_key="insight" checked={this.state.insight} onChange={this.handleChange} />Проницательность
                </label>
                    <label>
                        <input type="checkbox" state_key="animalHandling" checked={this.state.animalHandling} onChange={this.handleChange} />Уход за животными
                </label>
                </div>


                <div>
                    <label>Харизма </label>
                    <input type="number" min="0" placeholder="Введите значение" state_key="charisma" value={this.state.charisma} onChange={this.handleChange} />
                </div>

                <div>
                    <label>
                        <input type="checkbox" state_key="charismaSave" checked={this.state.charismaSave} onChange={this.handleChange} />Спасбросок
                </label>
                    <label>
                        <input type="checkbox" state_key="performance" checked={this.state.performance} onChange={this.handleChange} />Выступление
                </label>
                    <label>
                        <input type="checkbox" state_key="intimidation" checked={this.state.intimidation} onChange={this.handleChange} />Запугивание
                </label>
                    <label>
                        <input type="checkbox" state_key="deception" checked={this.state.deception} onChange={this.handleChange} />Обман
                </label>
                    <label>
                        <input type="checkbox" state_key="persuasion" checked={this.state.persuasion} onChange={this.handleChange} />Убеждение
                </label>
                </div>


                <button >
                    Создать лист персонажа
                </button>



            </div >
        )
    }
}

export default Form;