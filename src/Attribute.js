import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';


class Attribute extends Component {
    render() {
        const paramValue = this.props[this.props.paramKey]
        const mod = Number(((paramValue - 10) / 2).toFixed())
        const isSave = this.props[this.props.paramSave]
        const masteryBonus = this.props.masteryBonus
        const saveValue = isSave ? mod + masteryBonus : mod
        const list = this.props.list

        return (
            <Card style={{ width: '20rem' }}>
                <Card.Header as="h4">{this.props.label} {paramValue}</Card.Header>
                <Card.Body>
                    <Card.Title as="h5"> Мoдификатор: {mod}</Card.Title>
                    <ListGroup>
                        <ListGroupItem>
                            <Form.Check
                                label={"Спасбросок: " + saveValue}
                                type="checkbox"
                                checked={isSave}
                                readOnly
                            />
                        </ListGroupItem>
                        {list.map((item, i) => {
                            const isCurrent = this.props[item.stateKey]
                            const currentValue = isCurrent ? mod + masteryBonus : mod
                            return <ListGroupItem key={i}>
                                <Form.Check
                                    label={item.label + ": " + currentValue}
                                    type="checkbox"
                                    checked={isCurrent}
                                    readOnly
                                />
                            </ListGroupItem>
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return (state)
}

Attribute.defaultProps = {
    list: []
}

export default connect(mapStateToProps)(Attribute);