import { combineReducers } from 'redux';
import counter from '~/src/app/reducers/counter';
import headerMenuOpen from '~/src/app/reducers/headerMenuOpen';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  counter,
  headerMenuOpen,
  routing: routerReducer
});

export default rootReducer;
