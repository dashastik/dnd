import React, { Component } from 'react';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Card, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

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
                <Button variant="secondary"  style={{ float: 'right' }} as={NavLink} to="/charisma">Далее</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Wisdom;
