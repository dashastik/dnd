import React, { Component } from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';

class Form extends Component {
    render() {
        return (
            <div>
                <InputText
                    label="Имя персонажа"
                    stateKey="characterName"
                />
                <InputText
                    label="Класс"
                    stateKey="class"
                />
                <InputNumber
                    label="Уровень"
                    stateKey="level"
                />
                <InputText
                    label="Предыстория"
                    stateKey="background"
                />
                <InputText
                    label="Имя игрока"
                    stateKey="playerName"
                />
                <InputText
                    label="Раса"
                    stateKey="race"
                />
                <InputText
                    label="Мировоззрение"
                    stateKey="ideology"
                />
                <InputNumber
                    label="Бонус мастерства"
                    stateKey="masteryBonus"
                />
                <InputNumber
                    label="Сила"
                    stateKey="strength"
                />
                <InputCheckbox
                    label="Спасбросок по силе"
                    stateKey="strengthSave"
                />
                <InputCheckbox
                    label="Атлетика"
                    stateKey="athletics"
                />
                <InputNumber
                    label="Ловкость"
                    stateKey="dexterity"
                />
                <InputCheckbox
                    label="Спасбросок по ловкости"
                    stateKey="dexteritySave"
                />
                <InputCheckbox
                    label="Акробатика"
                    stateKey="acrobatics"
                />
                <InputCheckbox
                    label="Ловкость рук"
                    stateKey="sleightOfHand"
                />
                <InputCheckbox
                    label="Скрытность"
                    stateKey="stealth"
                />
                <InputNumber
                    label="Телосожение"
                    stateKey="construction"
                />
                <InputCheckbox
                    label="Спасбросок по телосложению"
                    stateKey="constructionSave"
                />
                <InputNumber
                    label="Интеллект"
                    stateKey="intelligence"
                />
                <InputCheckbox
                    label="Спасбросок по интелекту"
                    stateKey="intelligenceSave"
                />
                <InputCheckbox
                    label="Анализ"
                    stateKey="investigation"
                />
                <InputCheckbox
                    label="История"
                    stateKey="history"
                />
                <InputCheckbox
                    label="Магия"
                    stateKey="arcana"
                />
                <InputCheckbox
                    label="Природа"
                    stateKey="nature"
                />
                <InputCheckbox
                    label="Религия"
                    stateKey="religion"
                />
                <InputNumber
                    label="Мудрость"
                    stateKey="wisdom"
                />
                <InputCheckbox
                    label="Спасбросок по мудрости"
                    stateKey="wisdomSave"
                />
                <InputCheckbox
                    label="Внимательность"
                    stateKey="perception"
                />
                <InputCheckbox
                    label="Выживание"
                    stateKey="survival"
                />
                <InputCheckbox
                    label="Медицина"
                    stateKey="medicine"
                />
                <InputCheckbox
                    label="Проницательность"
                    stateKey="insight"
                />
                <InputCheckbox
                    label="Уход за животными"
                    stateKey="animalHandling"
                />
                <InputNumber
                    label="Харизма"
                    stateKey="charisma"
                />
                <InputCheckbox
                    label="Спасбросок по харизме"
                    stateKey="charismaSave"
                />
                <InputCheckbox
                    label="Выступление"
                    stateKey="performance"
                />
                <InputCheckbox
                    label="Запугивание"
                    stateKey="intimidation"
                />
                <InputCheckbox
                    label="Обман"
                    stateKey="deception"
                />
                <InputCheckbox
                    label="Убеждение"
                    stateKey="persuasion"
                />
            </div>
        )
    }
}

export default Form;
