import React,{Component} from 'react'
import Menu from './Menu'
import '../components/Projects.css'
import castleRock from '../assets/Castle Rocks.jpg'
import farmAndEstates from '../assets/farmAndEstate.jpg'
import FooterMenu from './FooterMenu'
import ForestHillLogo from '../assets/forestHill logo.png'
import FHE1 from '../assets/ForestHillEstate1.jpg'
import FHEInside from '../assets/ForestHillEstateInside.jpg'
import FHEMain from '../assets/ForestHillEstateR.jpg'
import FHE2 from '../assets/ForestHillEstateRight.jpg'
import FHELLeft from '../assets/ForestHillEstateLongL.jpg'
import FHERight from '../assets/ForestHillEstateLongR.jpg'

class Projects extends Component{
    render(){
        return( 
            <div className="container-fluid">
                <header>
                    <Menu/>
                </header>
                <div className="container">
                    <div className="row justify-content-md-center" style={{paddingTop:'100px'}}>
                        <div className="col-sm-4">
                            <h1 className="ProjectHead">
                                PROJECTS
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-8">
                        <p className="text-center content-style" style={{paddingBottom:'100px',paddingTop:'10px'}}>Here are 
                        some projects JWBC is working on to make the experience of the jungle immersive.</p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-5 card-padding">
                            <div className="card" style={{border:'None'}}>
                                <img src={castleRock} className="card-img-top image-edges"  alt="error"></img>
                            </div>
                        </div>
                        <div className="col-sm-5 card-padding" style={{paddingBottom:'40px'}}>
                            <div className="card" style={{border:'None'}}>
                                <img src={farmAndEstates} className="card-img-top image-edges" alt="error"></img>
                            </div>
                        </div>
                        <h1 className="ProjectHead">A Sunil Fernandes Initiative</h1>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-10">
                            <h5 className="ProjectHead">Projects Consulted, Planned and Developed</h5>
                        </div>
                    </div>
                    <div className="row justify-content-left">
                        <div className="col-sm-2">
                            <img src={ForestHillLogo} alt="error" style={{paddingTop:'30px',paddingBottom:'40px'}}></img>
                        </div>
                    </div>
                    <div className="row justify-content-md-center" style={{paddingBottom:'50px'}}>
                        <div className="col-sm-10">
                            <img src={FHEMain} alt="error" className="img-fluid image-edges"></img>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-5"style={{paddingBottom:'50px'}}>
                            <img src={FHE2} alt="error" className="img-fluid image-edges"></img>
                        </div>
                        <div className="col-sm-5" style={{paddingBottom:'50px'}}>
                            <img src={FHE1} alt="error"className="img-fluid image-edges"></img>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3" style={{paddingBottom:'50px'}}>
                            <img src={FHELLeft} alt="error" className="img-fluid image-edges"></img>
                        </div>
                        <div className="col-sm-6" style={{paddingBottom:'50px',paddingTop:'15px'}}>
                            <img src={FHEInside} alt="error" className="img-fluid image-edges"></img>
                        </div>
                        <div className="col-sm-3" style={{paddingBottom:'50px'}}>
                            <img src={FHERight} alt="error" className="img-fluid image-edges"></img>
                        </div>
                    </div>
                    <div className="row justify-content-md-center" style={{borderTop:"1px solid #667382"}}>
                        <div className="col-sm-10">
                            
                        </div>
                    </div>
                </div>
                <FooterMenu/>
            </div>
        )
    }
}

export default Projects;
