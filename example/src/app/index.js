import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
const history = createBrowserHistory();
syncReduxAndRouter(history, store);

render(
	<Provider store={store}>
		<Router history={history}>
			{routes}
		</Router>
	</Provider>,
	document.getElementById('app')
);
