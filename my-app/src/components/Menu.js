import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Media,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';
import './menu.css'
import LogoFinal from '../assets/LogoTest.png'

const Menu= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid">
      <header className="masthead">
        
      </header>
    </div>
  );
}

export default Menu;
