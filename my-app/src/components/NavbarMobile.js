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
import Logo from '../assets/logoplain.png'

const NavbarMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src={Logo} className="img-fluid"alt="error"/><p style={{width:'20',alignContent:'center',fontSize:'12px'}}>Jungle walks Base Camp</p></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">HOME</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/components/">ABOUT US</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/components/">PROJECTS</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/components/">ACCOMMODATION</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/components/">GALLERY</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/components/">BLOG</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/components/">EVENTS</NavLink>
            </NavItem>            <NavItem>
              <NavLink href="/components/">CONTACT US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <img src={Lake} alt="error" className="img-fluid"/>
    </div>
  );
}

export default NavbarMobile;