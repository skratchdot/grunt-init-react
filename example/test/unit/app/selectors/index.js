import * as selectors from '~/src/app/selectors/index';
import Immutable from 'immutable';
import { expect } from 'chai';

describe('selectors: records', () => {
  it('handles counterSelector(state)', () => {
    expect(selectors.counterSelector({
      counter: 42
    })).to.eql(42);
  });
  it('handles counterListSelector(state)', () => {
    const list = selectors.counterListSelector({ counter: 3 });
    expect(list.size).to.eql(3);
    expect(list.count()).to.eql(3);
    expect(Immutable.List.isList(list)).to.be.true;
    expect(list.toJSON()).to.eql([0, 1, 2]);
  });
  it('handles counterListReversedSelector(state)', () => {
    const list = selectors.counterListReversedSelector({ counter: 3 });
    expect(list.size).to.eql(3);
    expect(list.count()).to.eql(3);
    expect(Immutable.List.isList(list)).to.be.true;
    expect(list.toJSON()).to.eql([2, 1, 0]);
  });
});
