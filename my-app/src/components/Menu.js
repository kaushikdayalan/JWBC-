import React, {Component } from 'react';
import './menu.css'
import NavbarMobile from './NavbarMobile'
import { Nav, NavItem, NavLink} from 'reactstrap';

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
          <Nav className="justify-content-end">
        <NavItem>
          <NavLink href="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About-us">ABOUT US</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Projects">PROJECTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Accomodation">ACCOMMODATION</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Gallery">GALLERY</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">BLOG</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">EVENTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Contact-us">CONTACT US</NavLink>
        </NavItem>
      </Nav>
          </div>
        )
    }
  }
}


export default Menu;
