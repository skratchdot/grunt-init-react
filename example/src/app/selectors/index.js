import Immutable from 'immutable';
import { createSelector } from 'reselect';

export function counterSelector(state) {
  return state.counter;
}

export const counterListSelector = createSelector(
  counterSelector,
  (counter) => Immutable.List(Immutable.Range(0, counter))
);

export const counterListReversedSelector = createSelector(
  counterListSelector,
  (list) => {
    return list.reverse();
  }
);
