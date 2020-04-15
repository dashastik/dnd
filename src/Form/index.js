import React, { Component } from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Form, Card, CardGroup } from 'react-bootstrap';
import Level from './Level';
import Inventory from './Inventory';

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
                    <Level />
                    <InputNumber
                        label="Бонус мастерства"
                        stateKey="masteryBonus"
                    />
                </Form.Row>

                <CardGroup>
                    <Card border="light">
                        <Card.Title>
                            <InputNumber
                                label="Сила"
                                stateKey="strength"
                            />
                        </Card.Title>
                        <InputCheckbox
                            label="Спасбросок по силе"
                            stateKey="strengthSave"
                        />
                        <InputCheckbox
                            label="Атлетика"
                            stateKey="athletics"
                        />
                    </Card>
                    <Card border="light">
                        <Card.Title>
                            <InputNumber
                                label="Ловкость"
                                stateKey="dexterity"
                            />
                        </Card.Title>
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
                    </Card>
                    <Card border="light">
                        <Card.Title>
                            <InputNumber
                                label="Телосожение"
                                stateKey="construction"
                            />
                        </Card.Title>
                        <InputCheckbox
                            label="Спасбросок по телосложению"
                            stateKey="constructionSave"
                        />
                    </Card>
                </CardGroup>

                <CardGroup>
                    <Card border="light">
                        <Card.Title>
                            <InputNumber
                                label="Интеллект"
                                stateKey="intelligence"
                            />
                        </Card.Title>
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
                    </Card>
                    <Card border="light">
                        <Card.Title>
                            <InputNumber
                                label="Мудрость"
                                stateKey="wisdom"
                            />
                        </Card.Title>
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
                    </Card>
                    <Card border="light">
                        <Card.Title>
                            <InputNumber
                                label="Харизма"
                                stateKey="charisma"
                            />
                        </Card.Title>
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
                    </Card>
                </CardGroup>
                <Inventory/>

            </Form>
        )
    }
}

export default FormCharacter;
