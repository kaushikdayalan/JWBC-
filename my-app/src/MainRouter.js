import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import Accomodation from './components/Accomodation'
import ContactUs from './components/ContactUs'
import Gallery from './components/Gallery'
import Events from './components/Events'
const MainRouter =()=>(
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About-us" component={AboutUs}/>
            <Route exact path="/Projects" component={Projects}/>
            <Route exact path="/Accomodation" component={Accomodation}/>
            <Route exact path="/Gallery" component={Gallery}/>
            <Route exact path="/Events" component={Events}/>
            <Route exact path="/Contact-us" component={ContactUs}/>
        </Switch>
    </div>
)

export default MainRouter;
