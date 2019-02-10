import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

export default () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <LinkContainer to='/'>
      <Navbar.Brand>Insta Vote</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to='/feed'>
          <Nav.Link>Feed</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/battle'>
          <Nav.Link>Battle</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/upload'>
          <Nav.Link>Upload</Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav>
        <Nav.Link href="https://www.github.com/caiohsramos" target='_blank'>GitHub</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
) 