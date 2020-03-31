import React, { Component } from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';

class Form extends Component {

    state = {
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

    }

    handleChange = (key, value) => this.setState({ [key]: value })

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <div>
                <InputText
                    label="Имя персонажа"
                    stateKey="characterName"
                    onChange={this.handleChange}
                />
                <InputText
                    label="Класс"
                    stateKey="class"
                    onChange={this.handleChange}
                />
                <InputNumber
                    label="Уровень"
                    stateKey="level"
                    onChange={this.handleChange}
                />
                <InputText
                    label="Предыстория"
                    stateKey="background"
                    onChange={this.handleChange}
                />
                <InputText
                    label="Имя игрока"
                    stateKey="playerName"
                    onChange={this.handleChange}
                />
                <InputText
                    label="Раса"
                    stateKey="race"
                    onChange={this.handleChange}
                />
                <InputText
                    label="Мировоззрение"
                    stateKey="ideology"
                    onChange={this.handleChange}
                />
                <InputNumber
                    label="Бонус мастерства"
                    stateKey="masteryBonus"
                    onChange={this.handleChange}
                />
                <InputNumber
                    label="Сила"
                    stateKey="strength"
                    onChange={this.handleChange}
                />
               
                <div>
                    <label>
                        <input type="checkbox" state_key="strengthSave" checked={this.state.strengthSave} onChange={this.handleChange} />Спасбросок по силе
                </label>
                    <label>
                        <input type="checkbox" state_key="athletics" checked={this.state.athletics} onChange={this.handleChange} />Атлетика
                </label>
                </div>

                <InputNumber
                    label="Ловкость"
                    stateKey="dexterity"
                    onChange={this.handleChange}
                />
              
                <div>
                    <label>
                        <input type="checkbox" state_key="dexteritySave" checked={this.state.dexteritySave} onChange={this.handleChange} />Спасбросок по ловкости
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
                <InputNumber
                    label="Телосожение"
                    stateKey="construction"
                    onChange={this.handleChange}
                />

                <div>
                    <label>
                        <input type="checkbox" state_key="constructionSave" checked={this.state.constructionSave} onChange={this.handleChange} />Спасбросок по телосложению
                </label>
                </div>
                <InputNumber
                    label="Интеллект"
                    stateKey="intelligence"
                    onChange={this.handleChange}
                />

                <div>
                    <label>
                        <input type="checkbox" state_key="intelligenceSave" checked={this.state.intelligenceSave} onChange={this.handleChange} />Спасбросок по интелекту
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

                <InputNumber
                    label="Мудрость"
                    stateKey="wisdom"
                    onChange={this.handleChange}
                />

                <div>
                    <label>
                        <input type="checkbox" state_key="wisdomSave" checked={this.state.wisdomSave} onChange={this.handleChange} />Спасбросок по мудрости
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

                <InputNumber
                    label="Харизма"
                    stateKey="charisma"
                    onChange={this.handleChange}
                />

                <div>
                    <label>
                        <input type="checkbox" state_key="charismaSave" checked={this.state.charismaSave} onChange={this.handleChange} />Спасбросок по харизме
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

                <button onClick={() => console.log(this.state)} >
                    Создать лист персонажа
                </button>

            </div >
        )
    }
}

export default Form;