import React,{Component} from 'react'
import Menu from './Menu'
import '../components/Gallery.css'

// Need to use modal for each image

class Gallery extends Component{
    render(){
        return(
            <div className="container-fluid">
                <header>
                    <Menu/>
                </header>
                <div className="container">
                    <div className="row justify-content-md-center" style={{paddingTop:'100px'}}>
                        <div className="col-sm-6">
                            <h1 className="GalleryHead">Gallery</h1>
                        </div>         
                    </div>    
                </div>            
            </div>
        );
    }
}

export default Gallery;
