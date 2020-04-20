import React, { Component } from 'react';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Card } from "react-bootstrap";

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
               </Card.Body>
            </Card>
        )
    }
}

export default Intelligence;
