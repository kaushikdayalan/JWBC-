import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Lake from '../assets/lake.jpg'
import Logo from '../assets/logomobile.png'

const NavbarMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src={Logo} className="img-fluid"alt="error"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/About-us">ABOUT US</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="#">PROJECTS</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="#">ACCOMMODATION</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="#">GALLERY</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="#">BLOG</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="#">EVENTS</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="#">CONTACT US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <img src={Lake} alt="error" className="img-fluid"/>
    </div>
  );
}

export default NavbarMobile;