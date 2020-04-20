import React, { Component } from 'react';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Card } from "react-bootstrap";

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
                </Card.Body>
            </Card>
        )
    }
}

export default Charisma;
