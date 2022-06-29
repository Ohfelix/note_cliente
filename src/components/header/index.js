import React from 'react'
import { Navbar, Container, Column, Button } from 'rbx';
import logo from '../../assets/images/logo.png'
import { NavbarBurger } from 'rbx/components/navbar/navbar-burger';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar>
        <Container>
          <Navbar.Brand>         
             <a href="/">        
              <img src={logo} alt=""/> 
            </a>              
            <NavbarBurger
              className='navbar burguer burguer'
              arial-label="menu"
              data-target="navbar-menu">
              <span aria-hidden="true"></span>  
              <span aria-hidden="true"></span>  
              <span aria-hidden="true"></span>
              </NavbarBurger>
            </Navbar.Brand>  
            <Navbar.Menu id="navbar-menu>">
              <Navbar.Segment 
                as="div"
                className="navbar-item navbar-end"
                align="right">
                  <Navbar.Menu id="navbar-menu">
                      <Navbar.Segment as="div" className="navbarítem navbar-end" align="right">
                          <Column.Group>
                            <Column>
                             <Button>
                              <a href="/register" className='button is-white has-text-custom-purple'>
                                RegisterLink
                              </a>     
                            </Button>                      
                            </Column>
                            <Column>
                            <Button>
                              <a href="/login" className='button is-white has-text-custom-purple'>
                                RegisterLink
                              </a>     
                            </Button> 
                            </Column>
                          </Column.Group>
                      </Navbar.Segment>
                  </Navbar.Menu>
                
              </Navbar.Segment>              
            </Navbar.Menu>                 
        </Container>
    </Navbar>
  )
}

export default Header;