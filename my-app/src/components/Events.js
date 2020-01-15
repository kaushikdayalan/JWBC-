import React, {Component} from 'react'
import Menu from './Menu'
import '../components/events.css'

class Events extends Component{
    render(){

        return(
            <div className="container-fluid event-bg">
                <header>
                    <Menu/>
                </header>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-12">
                            <h1 className="heading-event text-center">One Big Screen in the
                             Deep Forest</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;