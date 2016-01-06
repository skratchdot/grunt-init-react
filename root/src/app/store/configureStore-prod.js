import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import routes from '../routes';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = compose(
    applyMiddleware(thunk)
  )(createStore)(rootReducer, initialState);
  return store;
}
