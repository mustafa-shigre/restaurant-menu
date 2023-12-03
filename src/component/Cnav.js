import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'

const Cnav = () => {
  return (
    <Row>
        <Navbar bg="dark" expend="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#" className='text-warning fs-4'>مطعم جديد
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث"
              className="mx-2"
             
            />
            <Button variant="outline-warning"><span className='fw-bold fs-5'>بحث</span></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default Cnav
