import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {

  return (
    <>
      <Navbar className={'py-5'} bg='dark' variant="dark" expand='lg' style={{fontSize: 30}}>
        <Container>
          <Navbar.Brand style={{fontSize: 36}}>
            <img src={require(`../images/clogo.png`)}
            width='50'
            height='50'
            alt=''
            />{' '}
            Cody's Blog
          </Navbar.Brand>
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
