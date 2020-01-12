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
import Logo from '../assets/logomobile.png'

const NavbarMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src={Logo} width="30px" className="img-fluid"alt="error"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/About-us">ABOUT US</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/Projects">PROJECTS</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/Accomodation">ACCOMMODATION</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/Gallery">GALLERY</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="#">BLOG</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="#">EVENTS</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/Contact-us">CONTACT US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMobile;