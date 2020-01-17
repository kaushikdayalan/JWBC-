import React, {Component} from 'react'
import Menu from './Menu'
import '../components/ContactUs.css'
import FooterMenu from './FooterMenu'
import Clock from 'react-live-clock'
import LogoPlain from '../assets/logoplain.png'
class ContactUs extends Component{
    render(){
        return(
            <div className="container-fluid">
                <header className="mastheadContactus">
                    <Menu/> 
                </header>
                <div className="container" style={{paddingTop:'70px'}}>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                            <h1 className="contact-us-head">CONTACT US</h1>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                        <p className="content-contact-style text-center">Please reach out to us and feel free 
                        to ask any questions about the property</p>
                        </div>
                    </div>
                    <div className="contact-us-bg">
                        <div className="row justify-content-md-center">
                            <div className="col-md-auto">
                                <h1 className="box-header text-center">JUNGLE WALKS BASE CAMP</h1>
                                <p className="box-content-contact-style text-center">inspired by <strong>THE HUNTER</strong></p>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-sm-5">
                                <h1 className="box-header text-center" style={{fontFamily:'"Allura",cursive',fontSize:'60px'}}>Kenneth Anderson</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterMenu/>
            </div>
        );
    }
}

export default ContactUs;