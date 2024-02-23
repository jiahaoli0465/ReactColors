import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'; // Import LinkContainer
import 'bootstrap/dist/css/bootstrap.min.css';

function NavB() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Use LinkContainer for client-side routing */}
        <LinkContainer to="/">
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Use LinkContainer for client-side routing */}
            <LinkContainer to="/colors">
              <Nav.Link>colors</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/colors/new">
              <Nav.Link>add color</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
