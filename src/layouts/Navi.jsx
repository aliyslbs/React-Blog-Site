import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from '../pages/Logout';
import Login from '../pages/Login';
import { useSelector } from 'react-redux';

export default function Navi() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/farfrom">Far From</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/farfrom">Home</Nav.Link>
                    </Nav>
                    {isAuthenticated ?  null : <Logout/>}
                    <Form name="search" className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    {isAuthenticated ? <Login/> : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
