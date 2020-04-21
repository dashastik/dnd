import React, { Component } from 'react';
import InputNumber from './InputNumber';
import InputCheckbox from './InputCheckbox';
import { Card, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

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
                    <Button variant="secondary" style={{ float: 'right' }} as={NavLink} to="/intelligence">Далее</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Construction; 
