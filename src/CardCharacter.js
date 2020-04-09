import React, { Component } from "react";
import { connect } from "react-redux";
import Attribute from './Attribute';
import { Card, ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

class CardCharacter extends Component {

    render() {
        return (
            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Header as="h4">Имя персонажа: {this.props.characterName}</Card.Header>
                    <Card.Body>
                        <Card.Title  as="h5">Информация о персонаже:</Card.Title>
                        <ListGroup>
                            <ListGroupItem>
                            Класс: {this.props.class}
                            </ListGroupItem>
                            <ListGroupItem>
                            Уровень: {this.props.level}
                            </ListGroupItem>
                            <ListGroupItem>
                            Предыстория: {this.props.background}
                            </ListGroupItem>
                            <ListGroupItem>
                            Имя игрока: {this.props.playerName}
                            </ListGroupItem>
                            <ListGroupItem>
                            Раса: {this.props.race}
                            </ListGroupItem>
                            <ListGroupItem>
                            Мировоззрение: {this.props.ideology}
                            </ListGroupItem>
                            <ListGroupItem>
                            Бонус мастерства: {this.props.masteryBonus}
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
                
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


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (state)
}
export default connect(mapStateToProps)(CardCharacter);
