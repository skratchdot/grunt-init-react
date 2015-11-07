import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
// pages
import NotFound from './pages/NotFound';
import One from './pages/One';
import Two from './pages/Two';
// variables
const packageInfo = require('../package.json');

// setup app
const App = React.createClass({
	render() {
		return (
			<div>
				<div>
					<Link to={`/${packageInfo.name}/one`}>One</Link>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Link to={`/${packageInfo.name}/two`}>Two</Link>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});

// create and render routes
const routes = (
	<Route component={App}>
		<Route path={`/${packageInfo.name}/one`} component={One} />
		<Route path={`/${packageInfo.name}/two`} component={Two} />
		<Route path="*" component={NotFound} />
	</Route>
);

ReactDOM.render(
	<Router history={createBrowserHistory()}>{routes}</Router>,
	document.getElementById('app')
);
