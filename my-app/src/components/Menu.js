import React, {Component } from 'react';
import './menu.css'
import NavbarMenu from './NavbarMobile'

class Menu extends Component{
  constructor(){
    super()
    this.state={
      width:false,
    }  
  }

  getWidth(){
    if(window.innerWidth<500){
      this.setState({width:true});
    }
  }
  componentDidMount(){
    this.getWidth();
  }

  render(){
    const {width} = this.state;

    if(width){
      return(
        <div>
          <NavbarMenu/>
        </div>
      )
      }
      else{
        return(
          <div>

          </div>
        )
    }
  }
}


export default Menu;
