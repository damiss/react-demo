import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	Link,
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
							<li><Link to="/about/detail">detail</Link></li>
							<li><Link to="/mine">mine</Link></li>
						</ul>
						<hr />
						{/* <Switch> */}
							<Route exact path="/" component={Home} />
							<Route exact path="/about/detail" component={Detail} />
							<Route exact path="/about" component={About} />
							<Route exact path="/mine" component={Mine} />
							<Redirect to="/" />
						{/* </Switch> */}
					</div>

				</Router>
			</div>
		)
	}
}

const Detail = () => (
	<div>
		<h1>detail</h1>
	</div>
)
