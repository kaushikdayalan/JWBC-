import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import FooterMenu from './FooterMenu';
import '../components/AboutUs.css'
import LoveOftheWild from '../assets/loveofthewild.png'
import teamColour from '../assets/s.png'
import {Media} from 'reactstrap'
import Logo from '../assets/logoplain.png'
import Lake from '../assets/lake.jpg'
class AboutUs extends Component{
    
    constructor(){
        super()
        this.state={
            width:false
        }
    }

    getWidth(){
        if(window.innerWidth<600){
            this.setState({width:true})
        }
    }

    componentDidMount(){
        this.getWidth();
    }

    render(){
        const {width}=this.state
        return(
            <div className="container-fluid">
                <header className="mastheadAboutus">
                    <Menu/>
                    {width? 
                        <img src={Lake} alt="error" className="img-fluid"/>:     
                    <Media left href="/">
                        <Media src={Logo} className="img-fluid" alt="error"/>
                    </Media>
                    }
                </header>
                <div className="container-fluid">
                    <div className="row" style={{paddingTop:'100px',paddingBottom:'20px'}}>
                        <div className="col-sm" style={{paddingTop:'30px',paddingBottom:'40px',paddingRight:'50px'}}>
                            <h1 className="text-right heading">FOR THE LOVE</h1>
                            <h1 className="text-right heading2">OF THE WILD</h1>
                            <h3 className="text-right sub-text"style={{paddingTop:"30px"}}>Our venture is promoted by die hard</h3>
                            <h3 className="text-right sub-text"style={{paddingTop:"30px",paddingBottom:"30px"}}>wildlife lovers & conservationists.</h3>
                        </div>
                            {width? 
                            <div className="col-sm" style={{paddingRight:'0',paddingLeft:'0'}}><img src={LoveOftheWild} alt="error" 
                            className="img-fluid"/></div>:
                            <div className="col-sm col-img"></div>
                                 }
                    </div>
                    <div className="container">
                        <div className="row"> 
                            <div className="col-sm">
                                <p className="p1">
                                Our directors have spent years in the bush and were the 
                                first to set up private resorts and safaris in Karnataka in the mid 80’s.
                                </p>
                                <p className="p1">
                                <b>Nawabzada Saad Bin Jung:</b>
                                &nbsp;Of Royal descent, sportsperson, wild life enthusiast, eco-tourism advocate, 
                                columnist, novelist, angler and photographer, has over 30 years experience in promoting and 
                                managing eco-tourism and jungle lodges and camps.
                                </p>
                                <p className="p1">
                                As an extension of his activities in India and his undying passion for the wilderness, 
                                based on his vast experience he has started ‘Africa under Canvas ‘, in order to offer 
                                the perfect wilderness experience set within the national parks of Africa. Like in Africa, 
                                he has recreated the uncomplicated rawness coupled with ultimate comfort at The Bison.
                                </p>
                                <p className="p1">
                                <b>Shaaz Jung:&nbsp;</b>
                                An avid wild-lifer, renowned naturalist, cat tracker and wildlife photographer. 
                                Shaaz left the lucrative corporate life having earned his degree from the Utrecht School of Economics, 
                                to follow the family’s passion of establishing eco tourism as an integral tool for Conservation. 
                                Shaaz has spent years studying game movement in South India and has earned the name 
                                ‘Leopard man of India’ with his astonishing Leopard portfolio. Currently Shaaz is making a 
                                feature film for National Geographic on Kabini’s wildlife. He works as the Head Naturalist 
                                and his photos taken in Kabini with The Bison can be seen on his social media links and his official website.
                                </p>
                                <p className="p1">
                                Riad Fyzee: A wildlife enthusiast and sportsperson. Riad owned and managed a travel and tourism
                                 company and has immense experience with wildlife, trekking and camping in the bush.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-team">
                    <div className="container" style={{paddingTop:'50px'}}>
                        <h1 className="text-center heading2">MEET THE FOUNDER, WILD EVANGELIST <br></br>
                        <i className="founder-name">"Sunil Fernandes"</i></h1>
                        <h3 className="text-center sub-text" style={{paddingTop:"50px"}}>Our camp is full of soul and eccentric characters.
                         The team have been carefully put together and are sure to give you a lively and fun wildlife holiday.</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                    <img src={teamColour} alt="error" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <FooterMenu/>
            </div>
        )
    }
}
export default AboutUs;