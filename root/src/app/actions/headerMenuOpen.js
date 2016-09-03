import * as types from '~/src/app/constants/ActionTypes';

export function openHeaderMenu(open) {
  return {
    type: types.OPEN_HEADER_MENU,
    payload: open
  };
}
