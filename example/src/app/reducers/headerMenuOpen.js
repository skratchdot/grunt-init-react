import * as types from '~/src/app/constants/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
  case types.OPEN_HEADER_MENU:
    return action.payload === true ? true : false;
  default:
    return state;
  }
};
