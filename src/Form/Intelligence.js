import React, { Component } from 'react';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Card, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

class Intelligence extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
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
                    <Button variant="secondary" style={{ float: 'right' }} as={NavLink} to="/wisdom">Далее</Button>
               </Card.Body>
            </Card>
        )
    }
}

export default Intelligence;
