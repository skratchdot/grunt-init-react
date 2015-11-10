import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
// pages
import Page from './components/Page';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Echo from './pages/Echo';
// variables
const packageInfo = require('../package.json');

// setup app
const App = React.createClass({
	render() {
		return (
			<Page>
				{this.props.children}
			</Page>
		);
	}
});

// create and render routes
const routes = (
	<Route component={App}>
		<Route path={`/${packageInfo.name}`} component={Home} />
		<Route path={`/${packageInfo.name}/home`} component={Home} />
		<Route path={`/${packageInfo.name}/about`} component={About} />
		<Route path={`/${packageInfo.name}/echo(/:echo)`} component={Echo} />
		<Route path="*" component={NotFound} />
	</Route>
);

ReactDOM.render(
	<Router history={createBrowserHistory()}>{routes}</Router>,
	document.getElementById('app')
);
