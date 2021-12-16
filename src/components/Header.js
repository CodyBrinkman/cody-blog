import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {

  return (
    <>
      <Navbar className={'py-5'} bg='light' expand='lg' style={{fontSize: 14}}>
        <Container>
          <Navbar.Brand>Cody's Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/blogs'>
                  <Nav.Link>Blogs</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )

}

export default Header
