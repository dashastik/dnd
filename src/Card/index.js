import React, { Component } from "react";
import { connect } from "react-redux";
import Attribute from './Attribute';
import { Card, ListGroupItem, ListGroup, CardGroup } from "react-bootstrap";

class CardCharacter extends Component {

    render() {
        const inventory = this.props.inventory
        return (
            <div>

                <Card >
                    <Card.Header as="h5">Имя персонажа: {this.props.characterName}</Card.Header>
                    <Card.Body>
                        <Card.Title as="p">Информация о персонаже:</Card.Title>
                        <ListGroup  horizontal >
                            <ListGroupItem style={{ width: '20vw' }}>
                                Класс: {this.props.class}
                            </ListGroupItem>
                            <ListGroupItem style={{ width: '10vw' }}>
                                Уровень: {this.props.level}
                            </ListGroupItem>
                            <ListGroupItem style={{ width: '20vw' }}>
                                Предыстория: {this.props.background}
                            </ListGroupItem>
                            <ListGroupItem style={{ width: '20vw' }}>
                                Имя игрока: {this.props.playerName}
                            </ListGroupItem>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroupItem style={{ width: '20vw' }}>
                                Раса: {this.props.race}
                            </ListGroupItem>
                            <ListGroupItem style={{ width: '20vw' }}>
                                Мировоззрение: {this.props.ideology}
                            </ListGroupItem>
                            <ListGroupItem style={{ width: '20vw' }}>
                                Бонус мастерства: {this.props.masteryBonus + this.props.modifierMasteryBonus}
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <CardGroup>
                    <Attribute
                        label="Сила"
                        paramKey="strength"
                        paramSave="strengthSave"
                        list={[{ label: "Атлетика", stateKey: "athletics" }]}
                    />

                    <Attribute
                        label="Ловкость"
                        paramKey="dexterity"
                        paramSave="dexteritySave"
                        list={[
                            { label: "Акробатика", stateKey: "acrobatics" },
                            { label: "Ловкость рук", stateKey: "sleightOfHand" },
                            { label: "Скрытность", stateKey: "stealth" }
                        ]}
                    />

                    <Attribute
                        label="Телосожение"
                        paramKey="construction"
                        paramSave="constructionSave"
                    />
                </CardGroup>
                <CardGroup>
                    <Attribute
                        label="Интеллект"
                        paramKey="intelligence"
                        paramSave="intelligenceSave"
                        list={[
                            { label: "Анализ", stateKey: "investigation" },
                            { label: "История", stateKey: "history" },
                            { label: "Магия", stateKey: "arcana" },
                            { label: "Природа", stateKey: "nature" },
                            { label: "Религия", stateKey: "religion" }
                        ]}
                    />

                    <Attribute
                        label="Мудрость"
                        paramKey="wisdom"
                        paramSave="wisdomSave"
                        list={[
                            { label: "Внимательность", stateKey: "perception" },
                            { label: "Выживание", stateKey: "survival" },
                            { label: "Медицина", stateKey: "medicine" },
                            { label: "Проницательность", stateKey: "insight" },
                            { label: "Уход за животными", stateKey: "animalHandling" }
                        ]}
                    />

                    <Attribute
                        label="Харизма"
                        paramKey="charisma"
                        paramSave="charismaSave"
                        list={[
                            { label: "Выступление", stateKey: "performance" },
                            { label: "Запугивание", stateKey: "intimidation" },
                            { label: "Обман", stateKey: "deception" },
                            { label: "Убеждение", stateKey: "persuasion" }
                        ]}
                    />
                </CardGroup>
                <Card>
                    <Card.Header>Инвентарь</Card.Header>
                    <Card.Body>
                        {inventory.map((item) =>{
                            return  <ListGroupItem>{item.text}</ListGroupItem>
                        })}
                    </Card.Body>
                </Card>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (state)
}
export default connect(mapStateToProps)(CardCharacter);
