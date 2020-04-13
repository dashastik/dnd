import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeCharacter from './action';
import { Form } from 'react-bootstrap';

class InputNumber extends Component {

    handleChange = e => {
        const levelValue = Number(e.target.value)
        const levelAction = changeCharacter("level", levelValue)
        this.props.dispatch(levelAction)

        let modifierMasteryBonus = 0
        if (levelValue < 5) {
            modifierMasteryBonus = 2
        } else if (levelValue < 9) {
            modifierMasteryBonus = 3
        } else if (levelValue < 13) {
            modifierMasteryBonus = 4
        } else if (levelValue < 17) {
            modifierMasteryBonus = 5
        } else {
            modifierMasteryBonus = 6
        }
        const modifierAction = changeCharacter("modifierMasteryBonus", modifierMasteryBonus)
        this.props.dispatch(modifierAction)
    }

    render() {
        return (
            <Form.Group>
                <Form.Label>{"Уровень: " + this.props.store.level}</Form.Label>
                <Form.Control
                    style={{ width: '95%' }}
                    type="range"
                    value={this.props.store.level}
                    onChange={this.handleChange}
                    max="30" />
            </Form.Group>
        )
    }
}

const mapStateToProps = (state) => {
    return { store: state }
}

export default connect(mapStateToProps)(InputNumber);
