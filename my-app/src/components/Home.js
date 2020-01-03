import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from '../components/Menu'
import '../components/home.css' 
import longshot from '../assets/longshot.png'
import whyUs from '../assets/WHYUS.jpg'
import WwCarousel from './WwCarousel'
import FooterMenu from './FooterMenu'

class Home extends Component{ //ok now I will fix the image 
    render(){
        return(
            <div>
                <Menu></Menu>
                <section>
                    <div style={{paddingTop:'70px',paddingBottom:'100px'}}>
                    <h1 className="heading" align='center'>The Jungle Walks Base Camp</h1>
                    </div>
                    <div align='center'style={{paddingBottom:'50px'}}>
                    <img src={longshot}className="img-fluid"style={{overflow:'hidden',paddingLeft:'50px',paddingTop:'20px',height:'400px'}}
                    width='1250px'alt="error"></img>
                    </div>
                    <div className="container">
                        <h4 className="heading" align="center" style={{paddingBottom:'40px'}}>Our location by the forest, African styled 
                        tented accommodation and highly personalized activities, allow us to give you a 
                        true and unique wildlife experience.</h4>
                        <div className="row">
                        <div className="col-sm">
                            <p align='center'>Serene and tranquil through the day while exciting and adventurous at night; 
                            the Bison Resort is the first of its kind in India that offers something rustic and luxurious at the 
                            very edge of adventure.</p>
                            <p align='center'>‘The Bison is situated at the confluence of the Bandipur and Nagarhole National Parks, 
                                on the shores of the Kabini River in Karnataka (West of Mysore).</p>
                            <p align='center'>A mix between a rustic African wildlife tented camp and the old hunting lodges of the Raj, 
                                The Bison offers a beautiful balance of luxury amidst wilderness.</p>
                        </div>
                        <div className="col-sm"align='center'>
                            <p align='center'>The Bison is the only property in the area that overlooks the tourism zone of Nagarhole
                                Tiger Reserve. We are closest to the gate and offer fabulous game viewing, both from camp and on safari.</p>
                            <p align='center'>With our spectacular location, accommodation and services, we promise you a one of a kind exclusive wilderness experience.</p>
                            <p align='center'>Curl up in the cosy deck and gaze into the forests at sunset, have a drink by the crackling 
                                fire and share your stories of the forest, dine in the jungle under a blanket of stars, 
                                soak in the romance of a midnight boat ride or thrill yourself with tracking down a big cat on safari. 
                                As we at The Bison always say, “If you are Game, so are we.”</p>
                        </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="why-us-bg">
                        <div className="container" style={{paddingTop:'80px'}}>
                            <div className="row">
                                <div className="col-sm">
                                    <h1 className="heading"align="center" style={{color:'black', fontSize:'60px', paddingBottom:'40px'}}>
                                        WHY US?</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <img className="img-fluid" style={{paddingBottom:'70px'}} src={whyUs} alt="error loading"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <h4 className="heading" align="center" style={{fontSize:'24',paddingBottom:'40px',lineHeight:'2'}}>
                                        We believe in experiential travel where our guests at Camp are <br></br>explorers.
                                         We will personalize your stay, help you track<br></br>wildlife and
                                    offer you activities no one else can.</h4>
                                </div>
                            </div> 
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm" > 
                                        <h3 className="heading"align="center"style={{color:'black'}}><strong>Team & Location</strong></h3>
                                        <p align="center">Watching elephants graze on the opposite bank from the Observation Deck 
                                            (equipped with binoculars and telescopes) is not uncommon. Herds of gaur 
                                            can be seen in the late evenings by the water. Deer, Sambar and Wild boar are at 
                                            large through the day. Our resident Leopard has also been spotted by guests numerous 
                                            times this year&nbsp;</p>
                                        <p align="center">&nbsp;if really lucky you may even find the elusive Sher Khan walking the 
                                        banks of the backwaters, all while lounging at camp.</p>
                                        <p align="center">Our team at Camp are great fun and create a wonderful atmosphere who will help make your 
                                            stay memorable. To know more about them and their eccentricities, please visit the About 
                                            Us section.<br></br><br></br><button>About us</button></p>
                                        
                                    </div>
                                    <div className="col-sm">
                                        <h3 className="heading"align="center"style={{color:'black'}}><strong>Unique Accommodation</strong></h3>
                                        <p align="center">The Bison takes pride in being the only African styled Tented Camp in South India.
                                         Our rooms are spacious and cosy and come with a stunning view. We offer an entirely new experience 
                                         as we maintain the rustic nature of the forest coupled with some small luxuries, to allow you the
                                          ultimate comfort in natures lap.</p>
                                        <p align="center">We at the Bison detest crowd and noise. With our limited number of rooms we 
                                        hope to maintain a tranquil environment all the while providing a very special, personalized, 
                                        and exclusive service.&nbsp;So if you’re looking to avoid the stereotypical jungle vacation 
                                        in a concrete, pseudo environment, The Bison is for you.</p>
                                        <p align="center">Spoil yourself, come to the jungles and experience something extraordinary.
                                        <br></br><br></br><button>View Accommodation</button></p>
                                    </div>
                                    <div className="col-sm">
                                        <h3 className="heading"align="center"style={{color:'black'}}><strong>Special Activities</strong></h3>
                                        <p align="center">As mentioned above, The Bison’s unmatched view and low inventory allows 
                                        us to offer exclusive and highly personalized activities. These activities will strongly 
                                        enhance the experience and enrich your holiday.</p>
                                        <p align="center">Come dine under and by the forest at our Bush Dinners, or take a midnight
                                         boat ride with tea on the backwaters or have a drink at sunset by the banks and count elephants. 
                                         The Bison offers you something unique and very different.</p>
                                        <p align="center">We have two types of activities, Common and Star. You can find these 
                                        on our activities page.<br></br><br></br><button>View Activities</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{height:'50%', width:'100%'}}>
                <div style={{paddingTop:'30px',paddingBottom:'100px'}}>
                    <h1 className="heading" align="center" style={{paddingBottom:'50px',paddingTop:'50px'}}>Wild Watching</h1>
                    <WwCarousel/>
                    </div>
                </div>
                <div>
                    <FooterMenu/>
                </div>
            </div>
        )
    }
}

export default Home;
