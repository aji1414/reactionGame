// external libraries and stylesheet
import React from "react";
import './Header.styles.scss';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';


// redux actions



const Header = () => (
    <Navbar className="p-0 pt-1 d-flex navbarContainer" expand="lg">
        <Navbar.Brand className="p-0 mr-0 col-6 navbarTitle" href="#home">F1 Race Start</Navbar.Brand>
        {/* <Navbar.Toggle className="navToggle" aria-controls="basic-navbar-nav" /> */}
        <Nav.Link className="p-0 col-3 navLink" href="#home">Home</Nav.Link>
        <Nav.Link className="p-0 col-3 navLink" href="#link">Link</Nav.Link>
        {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse> */}
    </Navbar>
);

export default Header;