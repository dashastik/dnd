import React, { Component } from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';

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
               <InputCheckbox
                    label="Спасбросок по силе"
                    stateKey="strengthSave"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Атлетика"
                    stateKey="athletics"
                    onChange={this.handleChange}
                />
                <InputNumber
                    label="Ловкость"
                    stateKey="dexterity"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Спасбросок по ловкости"
                    stateKey="dexteritySave"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Акробатика"
                    stateKey="acrobatics"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Ловкость рук"
                    stateKey="sleightOfHand"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Скрытность"
                    stateKey="stealth"
                    onChange={this.handleChange}
                />
                <InputNumber
                    label="Телосожение"
                    stateKey="construction"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Спасбросок по телосложению"
                    stateKey="constructionSave"
                    onChange={this.handleChange}
                />
                <InputNumber
                    label="Интеллект"
                    stateKey="intelligence"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Спасбросок по интелекту"
                    stateKey="intelligenceSave"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Анализ"
                    stateKey="investigation"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="История"
                    stateKey="history"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Магия"
                    stateKey="arcana"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Природа"
                    stateKey="nature"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Религия"
                    stateKey="religion"
                    onChange={this.handleChange}
                />
                <InputNumber
                    label="Мудрость"
                    stateKey="wisdom"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Спасбросок по мудрости"
                    stateKey="wisdomSave"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Внимательность"
                    stateKey="perception"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Выживание"
                    stateKey="survival"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Медицина"
                    stateKey="medicine"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Проницательность"
                    stateKey="insight"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Уход за животными"
                    stateKey="animalHandling"
                    onChange={this.handleChange}
                />
                <InputNumber
                    label="Харизма"
                    stateKey="charisma"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Спасбросок по харизме"
                    stateKey="charismaSave"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Выступление"
                    stateKey="performance"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Запугивание"
                    stateKey="intimidation"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Обман"
                    stateKey="deception"
                    onChange={this.handleChange}
                />
                <InputCheckbox
                    label="Убеждение"
                    stateKey="persuasion"
                    onChange={this.handleChange}
                />
                <button onClick={() => console.log(this.state)} >
                    Создать лист персонажа
                </button>

            </div >
        )
    }
}

export default Form;