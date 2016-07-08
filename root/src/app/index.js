import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '~/src/app/store/configureStore';
import { getRoutes } from '~/src/app/routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      {getRoutes()}
    </Router>
  </Provider>,
  document.getElementById('app')
);
