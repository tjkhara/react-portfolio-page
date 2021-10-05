import './App.css'
import React, { Fragment } from 'react'
import ProjectCardList from './components/ProjectCardList'
import { Container, Row, Col, Navbar, NavbarBrand, Jumbotron } from 'reactstrap'
import Header from './components/Layout/Header'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container className='container-spacing'>
        <ProjectCardList />
      </Container>
    </React.Fragment>
  )
}

export default App
