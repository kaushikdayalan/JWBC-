import React,{Component} from 'react'
import Menu from '../components/Menu'
import '../components/home.css' 
import img from '../assets/longshot.png'
class Home extends Component{
    render(){
        return(
            <div> 
              
                <section>
                <header class="masthead">
                <Menu></Menu>
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-12 text-right" style={{top:'100px',left:'60px'}}>
                                <h1 className="font-main">Welcome to Jungle Walks Base Camp</h1>
                                    <p class="lead">Wild is Calling !! Where are you ??</p>
                                    <button className="btn btn-secondary btn-lg" href="#contact-us">Know more</button>
                            </div>
                        </div>
                    </div>
                </header>
                </section>
                <section>
                    <div style={{paddingTop:'70px',paddingBottom:'100px'}}>
                    <h1 className="heading" align='center'>The Jungle Walks Base Camp</h1>
                    </div>
                    <div align='center'style={{paddingBottom:'50px'}}>
                    <img src={img} class="img-fluid" width='1250px'alt="error"></img>
                    </div>
                    <div class="container">
                        <h4 className="heading" align="center" style={{paddingBottom:'40px'}}>Our location by the forest, African styled 
                        tented accommodation and highly personalized activities, allow us to give you a 
                        true and unique wildlife experience.</h4>
                        <div class="row" align='center'>
                        <div class="col-sm">
                            <p>Serene and tranquil through the day while exciting and adventurous at night; 
                            the Bison Resort is the first of its kind in India that offers something rustic and luxurious at the 
                            very edge of adventure.</p>
                            <p>‘The Bison is situated at the confluence of the Bandipur and Nagarhole National Parks, 
                                on the shores of the Kabini River in Karnataka (West of Mysore).</p>
                            <p>A mix between a rustic African wildlife tented camp and the old hunting lodges of the Raj, 
                                The Bison offers a beautiful balance of luxury amidst wilderness.</p>
                        </div>
                        <div class="col-sm">
                            <p>The Bison is the only property in the area that overlooks the tourism zone of Nagarhole
                                Tiger Reserve. We are closest to the gate and offer fabulous game viewing, both from camp and on safari.</p>
                            <p>With our spectacular location, accommodation and services, we promise you a one of a kind exclusive wilderness experience.</p>
                            <p>Curl up in the cosy deck and gaze into the forests at sunset, have a drink by the crackling 
                                fire and share your stories of the forest, dine in the jungle under a blanket of stars, 
                                soak in the romance of a midnight boat ride or thrill yourself with tracking down a big cat on safari. 
                                As we at The Bison always say, “If you are Game, so are we.”</p>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
