import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';

class Strength extends Component {
    render() {
        return (
            <Card >
                <Card.Header>Навыки:</Card.Header>
                <Card.Body>
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
                </Card.Body>
            </Card>
        )
    }
}

export default Strength;
