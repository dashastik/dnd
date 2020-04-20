import React, { Component } from 'react';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Card } from "react-bootstrap";

class Wisdom extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
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
                </Card.Body>
            </Card>
        )
    }
}

export default Wisdom;
