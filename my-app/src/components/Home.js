import React,{Component} from 'react'
import Menu from '../components/Menu'
import '../components/home.css'
class Home extends Component{
    render(){
        return(
            <div> 
                <Menu></Menu>
 <header class="masthead">
   <div class="container h-100">
     <div class="row h-100 align-items-center">
       <div class="col-12 text-right" style={{bottom:'340px',left:'60px'}}>
         <h1 class="font-weight-light">Welcome to Jungle Walks Base Camp</h1>
         <p class="lead">Wild is Calling !! Where are you ??</p>
       </div>
     </div>
   </div>
 </header>
            </div>
        )
    }
}

export default Home;
