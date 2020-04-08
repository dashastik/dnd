import React, { Component } from "react";
import { connect } from "react-redux";


class Attribute extends Component {
    render() {
        const paramValue = this.props[this.props.paramKey]
        const mod = Number(((paramValue - 10) / 2).toFixed())
        const isSave = this.props[this.props.paramSave]
        const masteryBonus = this.props.masteryBonus
        const saveValue = isSave ? mod + masteryBonus : mod
        const list = this.props.list

        return (
            <div>
                <p>Наименование: {this.props.label}</p>
                <p>Значение: {paramValue} </p>
                <p>Мoдификатор: {mod} </p>
                <p>Спасбросок: {isSave ? "да" : "нет"}, {saveValue}</p>
                <div>
                    {list.map((item, i) => {
                        const isCurrent = this.props[item.stateKey]
                        const currentValue = isCurrent ? mod + masteryBonus : mod
                        return <p key={i}>{item.label}: {isCurrent ? "да" : "нет"}, {currentValue}</p>
                    })}
                </div>
            </div>
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