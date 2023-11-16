import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className='fixed-top position-sticky'>
      <Navbar.Brand href="/home" className='mx-3'>
      <img src="logo512.png" alt="" style={{width:"90px"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav  " />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mr-auto  fw-bold text-muted align-self-start" style={{marginLeft:"80px"}}>
          <Nav.Link href="/home">Home</Nav.Link>
          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item href="/About">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Web Development" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="App Development" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Digital Marketing" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#Graphic Designing">Graphic Designing</Nav.Link>
          <Nav.Link href="#Blog">Blog</Nav.Link>
          <Nav.Link href="#Contact.Us">Contact.Us</Nav.Link>
        </Nav>
        <Nav.Link href='' className=" orange d-flex align-items-center justify-content-center text-center rounded mx-2" 
        style={{width:"150px" , height:"60px"}} >+918607721438</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;

