import { expect } from 'chai';
import reducer from '~/src/app/reducers/headerMenuOpen';
import { testValues } from '~/test/util';

describe('headerMenuOpen reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql(false);
  });
  it('should handle OPEN_HEADER_MENU', () => {
    testValues(reducer, 'OPEN_HEADER_MENU', [
      [false, false, false],
      [false, true, true],
      [true, false, false],
      [true, true, true]
    ]);
  });
});
