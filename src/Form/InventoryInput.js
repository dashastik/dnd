import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { deleteInventoryItem, changeInventoryItem } from '../action';
import { connect } from 'react-redux';

class InventoryInput extends Component {
    handleClick = (e) => {
        const action = deleteInventoryItem(this.props.id)
        this.props.dispatch(action)
    }
    handleChange = (e) => {
        const action = changeInventoryItem(this.props.id, e.target.value)
        this.props.dispatch(action)
    }
    render() {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Элемент инветаря"
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary"
                        onClick={this.handleClick}
                    >х</Button>
                </InputGroup.Append>
            </InputGroup>

        )
    }
}



export default connect()(InventoryInput);
