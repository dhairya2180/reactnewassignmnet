import React from 'react'
import "./Navbar.css"
import  {Container,Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from "react-router-dom"


const navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand >
        <Link to="https://www.google.co.in/"><img
        src={require("../images/logo.png")}
        width="250"
        // height="30"
        className="d-inline-block align-top"
        // alt="React Bootstrap logo"
        alt='ff'
      /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className='f'><Link to="/" className='ff'>Home</Link></Nav.Link>
          <NavDropdown style={{color:"black"}} title="Pages" id="navbarScrollingDropdown">
            <NavDropdown.Item ><Link to="/about" className='ff'>About</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/Testimonial" className='ff'>Testimonial</Link></NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
       <Nav.Link className="f" ><Link to="/product" className='ff'>Products</Link></Nav.Link>
       <Nav.Link className="f" ><Link to="/Blog" className='ff'>Blog</Link></Nav.Link>
       <Nav.Link className="f" ><Link to="/Contact" className='ff'>Contact</Link></Nav.Link>
        </Nav>
        <Button variant="outline-Dark" ><Link to="/cart" className='ff1' >Cart Product</Link></Button>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
       
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default navbar