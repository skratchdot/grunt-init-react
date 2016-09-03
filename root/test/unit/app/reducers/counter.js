import { expect } from 'chai';
import reducer from '~/src/app/reducers/counter';
import { testValues } from '~/test/util';

describe('leftNavOpen reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql(0);
  });
  it('should handle INCREMENT_COUNTER', () => {
    testValues(reducer, 'INCREMENT_COUNTER', [
      [0, 1, 1],
      [0, 5, 5],
      [5, 1, 6]
    ]);
  });
  it('should handle SET_COUNTER', () => {
    testValues(reducer, 'SET_COUNTER', [
      [0, 1, 1],
      [0, 5, 5],
      [5, 1, 1]
    ]);
  });
});
