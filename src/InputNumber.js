import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeCharacter from './action';
import { Form } from 'react-bootstrap';

class InputNumber extends Component {

    handleChange = e => {
        const action = changeCharacter(this.props.stateKey, Number(e.target.value))
        this.props.dispatch(action)
    }

    render() {
        return (
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control
                    style={{ width: '95%' }}
                    type="number"
                    min="0"
                    placeholder="Введите число"
                    value={this.props.store[this.props.stateKey]}
                    // onChange={this.handleChange}
                    readOnly
                />
                <Form.Control
                    style={{ width: '95%' }}
                    type="range"
                    value={this.props.store[this.props.stateKey]}
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
