import React, { Component } from 'react';

class InputCheckbox extends Component {

    state = { value: false }

    handleChange = e => this.setState({ value: e.target.checked })

    componentDidUpdate() {
        this.props.onChange(this.props.stateKey, this.state.value)
    }

    render() {
        return (
            <div>
                <label>
                <input
                    type="checkbox"
                    checked={this.state.value}
                    onChange={this.handleChange}
                />
                {this.props.label}
                </label>
            </div>
        )
    }
}

export default InputCheckbox;
