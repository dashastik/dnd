import React, { Component } from 'react';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Card, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

class Charisma extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
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
                    <Button variant="secondary" style={{ float: 'right' }} as={NavLink} to="/inventory">Далее</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Charisma;
