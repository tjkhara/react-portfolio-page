import React from 'react'
import { Container, Row, Col, Navbar, NavbarBrand, Jumbotron } from 'reactstrap'

const Header = () => {
  return (
    <Jumbotron fluid className='header-styles'>
      <Container fluid>
        <h1 className='display-3'>TJ Khara</h1>
        <p className='lead'>
          Portfolio page built with React, bootstrap, and reactstrap
        </p>
      </Container>
    </Jumbotron>
  )
}

export default Header
