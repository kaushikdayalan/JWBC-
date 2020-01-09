import React,{Component} from 'react'
import Menu from './Menu'
import '../components/Accomodation.css'
import castleRock from '../assets/Castle Rocks.jpg'
import farmAndEstates from '../assets/farmAndEstate.jpg'
import FooterMenu from './FooterMenu'


class Acc extends Component{
    render(){
        return(
            <div className="container-fluid">
                <header>
                    <Menu/>
                </header>
                <div className="container">
                    <div className="row justify-content-md-center" style={{paddingTop:'100px'}}>
                        <div className="col-sm-7">
                            <h1 className="AccomHead">
                                ACCOMMODATION
                            </h1>
                            <p className="text-center content-style" style={{paddingBottom:'100px'}}>Here are some projects JWBC is working 
                            on to make the experience of the jungle immersive.</p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-5 card-padding">
                            
                        </div>
                        <div className="col-sm-5 card-padding" style={{paddingBottom:'40px'}}>
                        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                        </div>
                        <h1 className="AccomHead">A Sunil Fernandes Initiative</h1>
                    </div>
                </div>
                <FooterMenu/>
            </div>
        )
    }
}

export default Acc;
