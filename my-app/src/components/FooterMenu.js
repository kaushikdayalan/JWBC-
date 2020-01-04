import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap';
import './FooterMenu.css'
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
        <div>
            <Nav className="justify-content-center">
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
    </div>
    )
}

export default FooterMenu;

