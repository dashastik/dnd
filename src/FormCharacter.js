import React, { Component } from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Form } from 'react-bootstrap';

class FormCharacter extends Component {
    render() {
        return (
            <Form>
                <InputText
                    label="Имя персонажа"
                    stateKey="characterName"
                />
                <Form.Row>
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
                </Form.Row>
                <Form.Row>
                    <InputNumber
                        label="Сила"
                        stateKey="strength"
                    />
                </Form.Row>
                <InputCheckbox
                    label="Спасбросок по силе"
                    stateKey="strengthSave"
                />
                <InputCheckbox
                    label="Атлетика"
                    stateKey="athletics"
                />
                <Form.Row>
                    <InputNumber
                        label="Ловкость"
                        stateKey="dexterity"
                    />
                </Form.Row>
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
                <Form.Row>
                    <InputNumber
                        label="Телосожение"
                        stateKey="construction"
                    />
                </Form.Row>
                <InputCheckbox
                    label="Спасбросок по телосложению"
                    stateKey="constructionSave"
                />
                <Form.Row>
                    <InputNumber
                        label="Интеллект"
                        stateKey="intelligence"
                    />
                </Form.Row>
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
                <Form.Row>
                    <InputNumber
                        label="Мудрость"
                        stateKey="wisdom"
                    />
                </Form.Row>
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
                <Form.Row>
                    <InputNumber
                        label="Харизма"
                        stateKey="charisma"
                    />
                </Form.Row>
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
            </Form>
        )
    }
}

export default FormCharacter;
