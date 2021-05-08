import React from 'react';
import "./Navbar.scss";
import logo from "../assets/logo.svg"

import { Navbar, Nav, ButtonGroup, Button, NavDropdown, Container } from "react-bootstrap";

const Navigation = () =>  (
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                ></img>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#cartao">Cartão</Nav.Link>
                    <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-light">
                        <NavDropdown title="Acessa minha conta" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action">
                                Action
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-light">Abra sua conta</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;