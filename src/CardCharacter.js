import React, { Component } from "react";
import { connect } from "react-redux";
import Attribute from './Attribute';

class CardCharacter extends Component {

    render() {
        console.log(this.props);

        return (
            <div>
                <div>
                    Имя персонажа: {this.props.characterName}
                </div>
                <div>
                    Класс: {this.props.class}
                </div>
                <div>
                    Уровень: {this.props.level}
                </div>
                <div>
                    Предыстория: {this.props.background}
                </div>
                <div>
                    Имя игрока: {this.props.playerName}
                </div>
                <div>
                    Раса: {this.props.race}
                </div>
                <div>
                    Мировоззрение: {this.props.ideology}
                </div>
                <div>
                    Бонус мастерства: {this.props.masteryBonus}
                </div>
                <div>
                    Сила: {this.props.strength}
                </div>
                <hr />
                <Attribute
                    label="Сила"
                    paramKey="strength"
                    paramSave="strengthSave"
                    list={[{ label: "Атлетика", stateKey: "athletics" }]}
                />
                <hr />
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
                <hr />
                <Attribute
                    label="Телосожение"
                    paramKey="construction"
                    paramSave="constructionSave"
                />
                <hr />
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
                <hr />
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
                <hr />
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
