import React, { Component } from 'react';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Card } from "react-bootstrap";


class Construction extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                <Card.Title>
                    <InputNumber
                        label="Телосложение"
                        stateKey="construction"
                    />
                </Card.Title>
                
                <InputCheckbox
                    label="Спасбросок по телосложению"
                    stateKey="constructionSave"
                />
                </Card.Body>
            </Card>
        )
    }
}

export default Construction; 
