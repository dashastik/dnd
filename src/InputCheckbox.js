import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeCharacter from './action';

class InputCheckbox extends Component {

    handleChange = e => {
        const action = changeCharacter(this.props.stateKey, e.target.checked)
        this.props.dispatch(action)
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={this.props.store[this.props.stateKey]}
                        onChange={this.handleChange}
                    />
                    {this.props.label}
                </label>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { store: state }
}

export default connect(mapStateToProps)(InputCheckbox);
