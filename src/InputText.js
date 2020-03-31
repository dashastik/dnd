import React, { Component } from 'react';

class InputText extends Component {

    state = { value: '' }

    handleChange = e => this.setState({ value: e.target.value })

    componentDidUpdate() {
        this.props.onChange(this.props.stateKey, this.state.value)
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default InputText;
