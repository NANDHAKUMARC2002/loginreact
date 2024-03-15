
import Nav from 'react-bootstrap/Nav';
import "./navbar.css"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-bootstrap';
import React from 'react'
import logo from "../../assets/logo.png"



function NavScrollExample() {
  return (
    
  <div className="navbar ">
    <div>
            <div className="upnav">
              <img src={logo} alt="" />
              <button>Book Now</button>
            </div>
          </div>
    <Navbar expand="lg" className="bg-body-tertiary">
      
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          
          <div className="navitems">
             <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavLink className="home" href="/Home">Home</NavLink>
            <NavLink  href="/wwe">What we offer</NavLink>
            <NavLink href="#action3">Events & Tournaments</NavLink>
            <NavLink href="#action4">General Pricing</NavLink>
            <NavLink href="#action5">Package Deaks & Price</NavLink>
            <NavLink href="#action6">Gallery</NavLink>
            <NavLink href="/contact">Contact us</NavLink>
            <NavLink href="#action8">FAQ's</NavLink>
            <NavLink href="#action9">FranChise & Partership</NavLink>
            <NavLink href="#action10">Blogs/News</NavLink>
          
            </Nav>
          </div>
         
          
         
        </Navbar.Collapse>
    
    </Navbar>
    </div>
  );
}

export default NavScrollExample;





