import * as actions from '~/src/app/actions/headerMenuOpen';
import { expect } from 'chai';
import td from 'testdouble';

describe('headerMenuOpen actions', () => {
  afterEach(() => td.reset());
  it('creates OPEN_HEADER_MENU when openHeaderMenu(open) is called', () => {
    [true, false].forEach((open) => {
      expect(actions.openHeaderMenu(open)).to.eql({
        type: 'OPEN_HEADER_MENU', payload: open
      });
    });
  });
});
