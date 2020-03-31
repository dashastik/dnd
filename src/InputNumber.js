import React, { Component } from 'react';

class InputNumber extends Component {

    state = { value: '' }

    handleChange = e => this.setState({ value: Number(e.target.value) })

    componentDidUpdate() {
        this.props.onChange(this.props.stateKey, this.state.value)
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input
                    type="number"
                    min="0"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default InputNumber;
