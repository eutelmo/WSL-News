import React from 'react';
import './App.css';

import {HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import logo from './components/img/logo_header.png'

import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function App() {
  return (
  <>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg" collapseOnSelect >
            <Navbar.Brand href="/" className='left-logo hover'>
              <img
                alt=''
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            World Surf League
            </Navbar.Brand>

            <NavbarToggle/>
            <Navbar.Collapse>
  
              <Nav>
                <Nav.Link href='/'> Home</Nav.Link>
                <Nav.Link href='/'> Watch</Nav.Link>
                <Nav.Link href='/'> Events</Nav.Link>
                <NavDropdown title="Atheletes" >
                  <NavDropdown.Item href='/'> Rankings</NavDropdown.Item>
                  <NavDropdown.Item href='/'> Atheletes Bios</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Router>
            <Routes>
                <Route path='Card1/*' element={<Card1 />}></Route>
                <Route path='Card2/*' element={<Card2 />}></Route>
                <Route path='Card3/*' element={<Card3 />}></Route>
                <Route path='/' element={<Home />}></Route>
            </Routes>

            <Link to="/Card1"></Link>
            <Link to="/Card2"></Link>
            <Link to="/Card2"></Link>


        </Router>
      <Footer/>
  </>
    
  );
}

export default App;
