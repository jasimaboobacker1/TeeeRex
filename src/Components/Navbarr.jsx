import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

function Navbarr() {
    const navigate=useNavigate()
  return (
    <Navbar expand="lg" className="" style={{backgroundColor:'#68AEB8'}}>
    <Container>
      <Navbar.Brand href="#home">Teerex</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link style={{textDecoration:'none'}} className='ms-4 text-light' to={"/"}>Home</Link>
          <Link style={{textDecoration:'none'}} className='ms-4 text-light' to={'/cart'}>Cart</Link>
          <Link style={{textDecoration:'none'}} className='ms-4 text-light' to={'/wishlist'}>Wishlist</Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr