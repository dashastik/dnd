import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { NavLink } from 'react-router-dom';

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
                    <Button variant="secondary" style={{ float: 'right' }} as={NavLink} to="/dexterity">Далее</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Strength;
