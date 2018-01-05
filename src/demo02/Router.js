import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { Home } from './Home'
import { About } from './About'
import { Mine } from './Mine'

export default class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/mine">mine</Link></li>
                            <li><a href="/mine">mine a </a></li>
                        </ul>
                        <hr/>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/mine" component={Mine} />
                    </div>
                    
                </Router>
            </div>
        )
    }
}
