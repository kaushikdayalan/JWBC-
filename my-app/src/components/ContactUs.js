import React, {Component} from 'react'
import Menu from './Menu'
import '../components/ContactUs.css'
import FooterMenu from './FooterMenu'
class ContactUs extends Component{
    render(){
        return(
            <div className="container-fluid">
                <header className="mastheadContactus">
                    <Menu/> 
                </header>
                <div className="container" style={{paddingTop:'70px'}}>
                    <div className="contact-us-bg">
                    <h1 className="contact-us-head" align='center'>The Jungle Walks Base Camp</h1>
                        <form>
                            <div className="form-group row justify-content-center" style={{paddingTop:'50px'}}>
                                <label className="col-sm-2 col-form-label"
                                style={{color:'white',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}}>
                                    Your Name(required)</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="Name"></input>
                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <label className="col-sm-2 col-form-label"
                                style={{color:'white',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}}>
                                    Your email(required)</label>
                                <div className="col-sm-4">
                                    <input type="email" className="form-control" id="Email"></input>
                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <label className="col-sm-2 col-form-label"
                                style={{color:'white',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}}>
                                    Subject</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="Subject"></input>
                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <label className="col-sm-2 col-form-label"
                                style={{color:'white',fontFamily:"'Josefin Sans',sans-serif",textAlign:'center'}}>
                                    Your message</label>
                                <div className="col-sm-7">
                                    <textarea className="form-control" id="Message"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <FooterMenu/>
            </div>
        );
    }
}

export default ContactUs;