import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { NavLink } from 'react-router-dom';

class Dexterity extends Component {
    render() {
        return (
            <Card >
                <Card.Body>
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
                    <Button variant="secondary" style={{ float: 'right' }} as={NavLink} to="/construction">Далее</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Dexterity;
