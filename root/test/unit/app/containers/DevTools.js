import { expect } from 'chai';
import { getMockPath } from '~/test/util';
import mockery from 'mockery';
import td from 'testdouble';

describe('<DevTools />', () => {
  it('should export DevTools', () => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    mockery.registerMock(getMockPath('~/src/app/containers/DevTools-dev'),
      td.function());
    const DevTools = require('~/src/app/containers/DevTools');
    expect(DevTools.default).to.be.a('Function');
    td.reset();
    mockery.deregisterAll();
    mockery.disable();
  });
});
