import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light">
                <Nav defaultActiveKey="/" className="flex-column" >
                    <ul>
                        <li><Nav.Link as={NavLink} to="/description">Описание</Nav.Link></li>
                        <li><Nav.Link as={NavLink} to="/strength">Навыки</Nav.Link></li>
                        <ol>
                            <li><Nav.Link as={NavLink} to="/strength">Сила</Nav.Link></li>
                            <li><Nav.Link as={NavLink} to="/dexterity">Ловкость</Nav.Link></li>
                            <li><Nav.Link as={NavLink} to="/construction">Телосложение</Nav.Link></li>
                            <li><Nav.Link as={NavLink} to="/intelligence">Интеллект</Nav.Link></li>
                            <li><Nav.Link as={NavLink} to="/wisdom">Мудрость</Nav.Link></li>
                            <li><Nav.Link as={NavLink} to="/charisma">Харизма</Nav.Link></li>

                        </ol>
                        <li><Nav.Link as={NavLink} to="/inventory">Инвентарь</Nav.Link></li>
                        <br/>
                        <li><Nav.Link as={NavLink} to="/card">Карточка персонажа</Nav.Link></li>
                    </ul>
                </Nav>
            </Navbar>

        )
    }
}

export default Navigation;
