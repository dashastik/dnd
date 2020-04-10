import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeCharacter from './action';
import { Form } from 'react-bootstrap';

class InputText extends Component {

    handleChange = e => {
        const action = changeCharacter(this.props.stateKey, e.target.value)
        this.props.dispatch(action)
    }

    render() {
        return (
            <Form.Group >
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите текст"
                    value={this.props.store[this.props.stateKey]}
                    onChange={this.handleChange}
                />
            </Form.Group>
        )
    }
}

const mapStateToProps = (state) => {
    return { store: state }
}

export default connect(mapStateToProps)(InputText);
