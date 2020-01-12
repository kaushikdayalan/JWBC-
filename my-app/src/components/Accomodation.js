import React,{Component} from 'react'
import '../components/Accomodation.css'
import Menu from './Menu'
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
              <p className="content-accom-style text-center">Enjoy the eclectic and elegant atmosphere at The Jungle Walks Base Camp.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accomodation;