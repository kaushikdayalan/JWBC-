import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './menu.css'

const Menu= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transperent" fixed="top" expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-item">
              <NavLink  href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#djksdfh">ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#djksdfh">PROJECTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#djksdfh">ACCOMMODATION</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#djksdfh">GALLERY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#djksdfh">BLOGS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#djksdfh">EVENTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#djksdfh">CONTACT US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;