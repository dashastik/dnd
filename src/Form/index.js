import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Inventory from './Inventory';
import Description from './Description';
import Strength from './Strength';
import Dexterity from './Dexterity';
import Construction from './Construction';
import Intelligence from './Intelligence';
import Wisdom from './Wisdom';
import Charisma from './Charisma';

class FormCharacter extends Component {
    render() {
        return (
            <Form style={{ width: '400px' }}>
                <Description />
                <Strength />
                <Dexterity/>
                <Construction/>
                <Intelligence/>
                <Wisdom/>
                <Charisma/>
                <Inventory />
            </Form>
        )
    }
}

export default FormCharacter;
