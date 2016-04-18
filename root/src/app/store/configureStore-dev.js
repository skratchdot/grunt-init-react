import { applyMiddleware, compose, createStore } from 'redux';
import DevTools from '../containers/DevTools';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const storeEnhancers = [];
  const reduxRouterMiddleware = routerMiddleware(browserHistory);
  const enableDevtools = process.env.DEVTOOLS !== 'disabled';
  storeEnhancers.push(applyMiddleware(thunk, reduxRouterMiddleware));
  if (enableDevtools) {
    storeEnhancers.push(DevTools.instrument());
  }
  const store = compose(...storeEnhancers)(createStore)(rootReducer,
    initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
