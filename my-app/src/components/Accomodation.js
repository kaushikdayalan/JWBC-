import React,{Component} from 'react'
import '../components/Accomodation.css'
import Menu from './Menu'
import Carousel1 from './carousels/Carousel1'
import Carousel2 from './carousels/carousel2'

class Accomodation extends Component{
  render(){
    return(
      <div className="container-fluid">
        <header>
          <Menu/>
        </header>
        <div className="container">
          <div className="row justify-content-md-center" style={{paddingTop:'70px'}}>
            <div className="col-sm-4">
              <h1 className="AccomHead">ACCOMMODATION</h1>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-6">
              <p className="content-accom-style text-center">Enjoy the eclectic and elegant atmosphere at The 
              Jungle Walks Base Camp.</p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              <Carousel1/>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-5">
              <h5 className="carousel-head-style">PHOTOS OF LOCATION</h5>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-3 text-center">
            <button type="submit" disabled className="carousel-button-style"style={{paddingTop:'10px',paddingBottom:'5px'}}>
              BOOK NOW</button>
            </div>
          </div>
          <div className="row justify-content-md-center" style={{paddingTop:'100px'}}>
            <div className="col-sm-7">
              <Carousel2/>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-5">
              <h5 className="carousel-head-style">FARM LAND</h5>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-3 text-center">
            <button type="submit" disabled className="carousel-button-style"style={{paddingTop:'10px',paddingBottom:'5px'}}>
              BOOK NOW</button>
            </div>
          </div>
          <div className="row justify-content-md-center">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Accomodation;