import * as types from '~/src/app/constants/ActionTypes';

export default (state = 0, action) => {
  switch (action.type) {
  case types.INCREMENT_COUNTER:
    return state + action.payload;
  case types.SET_COUNTER:
    return action.payload;
  default:
    return state;
  }
};
