/**
 * Fariha Khan
 * 11/10/25
 * IT302-451
 * Unit 10 Exercise
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
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand>Fariha Khan (fk222)</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>Check Out</Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MyNavigationBar;