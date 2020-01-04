import React, {Component } from 'react';
import './menu.css'
import NavbarMobile from './NavbarMobile'
import Logo from '../assets/logoplain.png'
import { Nav, NavItem, NavLink, Media } from 'reactstrap';

class Menu extends Component{
  constructor(){
    super()
    this.state={
      width:false,
    }  
  }

  getWidth(){
    if(window.innerWidth<500){
      this.setState({width:true});
    }
  }
  componentDidMount(){
    this.getWidth();
  }

  render(){
    const {width} = this.state;

    if(width){
      return(
        <div>
          <NavbarMobile/>
        </div>
      )
      }
      else{
        return(
          <div>
        <header className="masthead">
          <Nav className="justify-content-end">
        <NavItem>
          <NavLink href="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About-us">ABOUT US</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">PROJECTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">ACCOMMODATION</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">GALLERY</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">BLOG</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">EVENTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">CONTACT US</NavLink>
        </NavItem>
      </Nav>
      <Media left href="/">
        <Media src={Logo} className="img-fluid" alt="error"/>
      </Media>
      </header>
          </div>
        )
    }
  }
}


export default Menu;
