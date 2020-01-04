import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap';
import './FooterMenu.css'
import footerLogo from '../assets/footerLogo.jpg'
const FooterMenu = ()=>{
    return(
    <div className="container"> 
        <div  className="head">
            <p align="center">HEAR FROM US</p>
        </div>
        <form>
            <div className="form-group">
                <div className="form-row justify-content-center">
                    <div className="col-4">
                        <input type="email" className="form-control inputbox-style"  placeholder="please enter your email"/>
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <div className="col-xs-3">
                        <button type="submit" disabled className="form-control button-style">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </form>
        <div className="border-line" style={{width:'auto', minWidth:'100px'}}></div>
        <div className="col-xl">
            <Nav className="justify-content-center footer-padding">
                <NavItem>
                    <NavLink href="#asdas">The - Team Hug Entertainment</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Hug - Humanity Under God</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">BLW - Bangalore Live Wire</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">The Hug Studio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">The Good News Gospel Network</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Jesus Walks Before Christ International Ministers</NavLink>
                </NavItem>
            </Nav>
        </div>
        <div className="border-line" style={{width:'auto', minWidth:'100px'}}></div>
        <div>
        <Nav className="justify-content-center footer-padding">
        <NavItem>
          <NavLink href="#">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">ABOUT US</NavLink>
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
        </div>
        <div className="border-line" style={{width:'auto', minWidth:'100px'}}></div>
        <div class="container footer-padding">
  <div class="row justify-content-center">
    <div class="col-md-auto">
        <img src={footerLogo} alt="error"/>
    </div>
  </div>
</div>
    </div>
    )
}

export default FooterMenu;

