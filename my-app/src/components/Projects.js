import React,{Component} from 'react'
import Menu from './Menu'
import '../components/Projects.css'
import castleRock from '../assets/Castle Rocks.jpg'
import farmAndEstates from '../assets/farmAndEstate.jpg'
import FooterMenu from './FooterMenu'


class Projects extends Component{
    render(){
        return( 
            <div className="container-fluid">
                <header>
                    <Menu/>
                </header>
                <div className="container">
                    <div className="row justify-content-md-center" style={{paddingTop:'100px'}}>
                        <div className="col-sm-7">
                            <h1 className="ProjectHead">
                                PROJECTS
                            </h1>
                            <p className="text-center content-style" style={{paddingBottom:'100px'}}>Here are some projects JWBC is working 
                            on to make the experience of the jungle immersive.</p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-5 card-padding">
                            <div className="card" style={{border:'None'}}>
                                <img src={castleRock} className="card-img-top image-edges" alt="error"></img>
                            </div>
                        </div>
                        <div className="col-sm-5 card-padding" style={{paddingBottom:'40px'}}>
                            <div className="card" style={{border:'None'}}>
                                <img src={farmAndEstates} className="card-img-top image-edges" alt="error"></img>
                            </div>
                        </div>
                        <h1 className="AccomHead">A Sunil Fernandes Initiative</h1>
                    </div>
                </div>
                <FooterMenu/>
            </div>
        )
    }
}

export default Projects;
