import { expect } from 'chai';
import reducer from '~/src/app/reducers/counter';

function testValues(type, values) {
  values.forEach((arr) => {
    const [ currentState, payload, expectedState ] = arr;
    expect(reducer(currentState, {
      type: type,
      payload: payload
    })).to.eql(expectedState);
  });
}

describe('leftNavOpen reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql(0);
  });
  it('should handle INCREMENT_COUNTER', () => {
    testValues('INCREMENT_COUNTER', [
      [0, 1, 1],
      [0, 5, 5],
      [5, 1, 6]
    ]);
  });
  it('should handle SET_COUNTER', () => {
    testValues('SET_COUNTER', [
      [0, 1, 1],
      [0, 5, 5],
      [5, 1, 1]
    ]);
  });
});
