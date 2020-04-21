import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/">DND</Navbar.Brand>
        <Nav>
            <NavDropdown title="Форма для заполнения" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/description" >Описание</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/strength" >Сила</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/dexterity" >Ловкость</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/construction" >Телосложение</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/intelligence" >Интеллект</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/wisdom" >Мудрость</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/charisma" >Харизма</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/inventory" >Инвентарь</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/card">Карточка персонажа</Nav.Link>
        </Nav>

    </Navbar>
)

export default Header;