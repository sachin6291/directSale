import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="danger" expand="lg">
      <Navbar.Brand href="/">Direct House</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Canarias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Lanzarote</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Fuerteventura
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Gran Canaria</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Tenerife</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">La Palma</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">La Gomera</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">El Hierro</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    // <header>
    //   <p>Direct House</p>
    //   <button>Canarias</button>
    //   <button>Post a Requirement</button>
    //   <button>Post a Property</button>
    //   <p>Home Loan</p>
    //   <p>Download App</p>
    //   <p>property list</p>
    //   <p>login</p>
    // </header>
  );
}
 
export default Header;