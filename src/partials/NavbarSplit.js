import React, { Component } from 'react';
import { Nav,Navbar,Dropdown,NavItem,NavLink,FormControl } from 'react-bootstrap';
import './Navbar.css'

export default class NavbarSplit extends Component {
    render() {
        return (
            <Navbar className="bg-light text-light navbar-custom justify-content-between">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Hello there!</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar>
        )
    }
}
