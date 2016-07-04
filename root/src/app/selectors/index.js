import Immutable from 'immutable';
import { createSelector } from 'reselect';

export function countSelector(state) {
  return state.count;
}

export const countListSelector = createSelector(
  countSelector,
  (count) => Immutable.List(Immutable.Range(0, count))
);

export const countListReversedSelector = createSelector(
  countListSelector,
  (list) => {
    return list.reverse();
  }
);
