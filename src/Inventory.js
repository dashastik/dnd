import React, { Component } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import InventoryInput from './InventoryInput';
import { connect } from 'react-redux';
import {addInventoryItem} from './action';


class Inventory extends Component {
    handleClick = e =>{
        const action = addInventoryItem();
        this.props.dispatch(action)
    }

    render() {
        const inventory = this.props.inventory

        return (
            <Card style={{ width: '400px', minHeight: '150px'}}>

                <Card.Header as="h5"> Инвентарь
                        <Button
                        style={{ float: "right" }}
                        variant="outline-secondary"
                        onClick={this.handleClick}
                        >+</Button>

                </Card.Header>
                <Card.Body>
                    <ListGroup>
                        {inventory.map((item, i, arr) => {
                            return <InventoryInput id={item.id} key={i} value={item.text}/>
                        })}
                    </ListGroup>
                </Card.Body>

            </Card>
        )
    }
}
const mapStateToProps = (state) => {
    return { inventory: state.inventory }
}

export default connect(mapStateToProps)(Inventory);

