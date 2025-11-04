/**
 * Fariha Khan
 * 11/4/25
 * IT302-451
 * Unit 9 Exercise
 * fk222@njit.edu
 */

import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Routes, Route, NavLink } from "react-router-dom";

function MyNavigationBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to={"/"}>Fariha Khan (fk222)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>

                        <Nav.Link as={NavLink} to={"/bookshelf"}>Bookshelf</Nav.Link>
                        <NavDropdown title="External Links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.njit.edu" target="_blank">NJIT Website</NavDropdown.Item>
                            <NavDropdown.Item href="https://njit.instructure.com" target="_blank">
                                NJIT Canvas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.figma.com/" target="_blank">Figma</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.codecademy.com/" target="_blank">
                                Codecademy
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavigationBar;