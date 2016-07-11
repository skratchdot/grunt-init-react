import { expect } from 'chai';
import reducers from '~/src/app/reducers/index';

describe('all reducers', () => {
  it('should contain the correct keys', () => {
    const keys = Object.keys(reducers({}, {}));
    expect(keys).to.contain('routing');
    expect(keys).to.contain('counter');
  });
});
