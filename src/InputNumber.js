import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeCharacter from './action';

class InputNumber extends Component {

    handleChange = e => {
        const action = changeCharacter(this.props.stateKey, Number(e.target.value))
        this.props.dispatch(action)
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input
                    type="number"
                    min="0"
                    value={this.props.store[this.props.stateKey]}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {store: state}
}

export default connect(mapStateToProps)(InputNumber);
