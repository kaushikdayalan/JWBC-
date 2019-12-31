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
                    <div align='center'>
                    <img src={img} class="img-fluid" alt title="awesome" width='1250' height='300' sizes="(max-width:800px) 100vw,1250px" alt="error"></img>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
