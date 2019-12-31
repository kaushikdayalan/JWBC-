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
                        <h4 className="heading" align="center">Our location by the forest, African styled 
                        tented accommodation and highly personalized activities, allow us to give you a 
                        true and unique wildlife experience.</h4>
  <div class="row" align='center'>
    <div class="col-sm">
      One of three two columns
    </div>
    <div class="col-sm">
      Two of Two columns
    </div>
  </div>
</div>
                </section>
            </div>
        )
    }
}

export default Home;
