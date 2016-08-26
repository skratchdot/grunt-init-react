import { expect } from 'chai';
import { getMockPath } from '~/test/util';
import mockery from 'mockery';
import td from 'testdouble';

describe('configureStore', () => {
  it('should export configureStore', () => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    mockery.registerMock(getMockPath('~/src/app/store/configureStore-dev'),
      td.function());
    const configureStore = require('~/src/app/store/configureStore');
    expect(configureStore.default).to.be.a('Function');
    td.reset();
    mockery.deregisterAll();
    mockery.disable();
  });
});
