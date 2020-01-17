import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap';
import './FooterMenu.css'
import footerLogo from '../assets/logoFooter.jpg'
const FooterMenu = ()=>{
    return(
    <div className="container" style={{paddingTop:'50px'}}> 
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
                    <NavLink href="#asdas"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >The - Team Hug Entertainment</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >Hug - Humanity Under God</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >BLW - Bangalore Live Wire</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >The Hug Studio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >The Good News Gospel Network</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}}>Jesus Walks Before Christ International Ministers</NavLink>
                </NavItem>
            </Nav>
        </div>
        <div className="border-line" style={{width:'auto', minWidth:'100px'}}></div>
        <div>
        <Nav className="justify-content-center footer-padding">
        <NavItem>
          <NavLink style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} href="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About-us" style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >ABOUT US</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Projects"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >PROJECTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Accomodation"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >ACCOMMODATION</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Gallery"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >GALLERY</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >BLOG</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Events"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >EVENTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Contact-us"style={{color:'#736c68',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}} >CONTACT US</NavLink>
        </NavItem>
      </Nav>
        </div>
        <div className="border-line" style={{width:'auto', minWidth:'100px'}}></div>
        <div className="container footer-padding">
  <div className="row justify-content-center">
    <div className="col-md-auto">
      <br></br>
      <div className="text-center">
        <img src={footerLogo}alt="error"/>
      </div>
    </div>
  </div>
</div>
    </div>
    )
}

export default FooterMenu;

