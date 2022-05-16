import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../openai.png';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" sticky="top" extend="md" collapseOnSelect>
                    <Navbar.Brand href="/" style={{marginLeft: "10px"}} >
                        <img src={logo} alt="Logo" width="50px" />
                        {' '}Open AI 
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="product-description">Product Description</Nav.Link>
                            <Nav.Link href="cold-emails">Cold Emails</Nav.Link>
                            <Nav.Link href="tweets">Tweets</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;