import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { browserHistory } from 'react-router';
import configureStore from '~/src/app/store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';

export function renderApp(RootComponent) {
  // Needed for onTouchTap
  // Check this repo:
  // https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();
  const store = configureStore();
  const history = syncHistoryWithStore(browserHistory, store);
  const rootElement = document.getElementById('app');
  render(
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    rootElement
  );
  if (module.hot) {
    module.hot.accept('./containers/Root', renderAppWithRoot);
  }
}

export function renderAppWithRoot() {
  renderApp(require('./containers/Root').default);
}

renderAppWithRoot();
