import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Accom from './components/Accom'
const MainRouter =()=>(
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Accom" component={Accom}/>
        </Switch>
    </div>
)

export default MainRouter;
