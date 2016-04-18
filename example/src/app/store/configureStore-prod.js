import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const reduxRouterMiddleware = routerMiddleware(browserHistory);
  const store = compose(
    applyMiddleware(thunk, reduxRouterMiddleware)
  )(createStore)(rootReducer, initialState);
  return store;
}
