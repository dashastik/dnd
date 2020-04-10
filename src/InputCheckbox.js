import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeCharacter from './action';
import { Form } from 'react-bootstrap';

class InputCheckbox extends Component {

    handleChange = e => {
        const action = changeCharacter(this.props.stateKey, e.target.checked)
        this.props.dispatch(action)
    }

    render() {
        return (
            <Form.Group>
                <Form.Check
                    label={this.props.label}
                    type="checkbox"
                    checked={this.props.store[this.props.stateKey]}
                    onChange={this.handleChange}
                />
            </Form.Group>
        )
    }
}

const mapStateToProps = (state) => {
    return { store: state }
}

export default connect(mapStateToProps)(InputCheckbox);
