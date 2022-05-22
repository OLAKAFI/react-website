import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button, FormControl, Form, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';




function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className=' border border-1 '   >
        <Container fluid>
          <Navbar.Brand >
            <Link to='/' className='text-decoration-none'>
              {/* <img
                src={logo}
                
                
                alt=""
                width="80"
                height="80"
                className="d-inline-block"
                
              /> */}
              <h3 >ReactLearn</h3>
            
            </Link>
            
           
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link to='/' className="text-decoration-none">Home</Link>

              </Nav.Link>
              
              
              <Nav.Link  className="mx-lg-4 text-decoration-none">
                <Link to='/about-us' className="text-decoration-none">About Us</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/contact-us' className="text-decoration-none">Contact Us</Link>

              </Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>

            {/* <Nav className='ms-4'>
              <Button variant="primary">Join Us</Button>

            </Nav> */}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    
    
    
    
    
    </>
  )
}

export default NavBar