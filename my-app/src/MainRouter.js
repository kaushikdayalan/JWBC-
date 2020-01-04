import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
const MainRouter =()=>(
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About-us" component={AboutUs}/>
        </Switch>
    </div>
)

export default MainRouter;
