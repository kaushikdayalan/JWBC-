import React,{Component} from 'react'
import Menu from '../components/Menu'
import '../components/home.css' 
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
                    <div style={{paddingTop:'70px',paddingBottom:'40px'}}>
                    <h1 className="heading" align='center'>The Jungle Walks Base Camp</h1>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
