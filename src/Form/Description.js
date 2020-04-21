import React, { Component } from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import Level from './Level';
import { Card, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

class Description extends Component {
    render() {
        return (
            <Card>
                <Card.Header>Информация о персонаже</Card.Header>
                <Card.Body>
                    <InputText
                        label="Имя персонажа"
                        stateKey="characterName"
                    />
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
                <Button variant="secondary"  style={{ float: 'right' }} as={NavLink} to="/strength">Далее</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Description;
