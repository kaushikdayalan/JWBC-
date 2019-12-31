import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
const MainRouter =()=>(
    <div>
        <Switch>
            <Route to="/" component={Home}/>
        </Switch>
    </div>
)

export default MainRouter;
