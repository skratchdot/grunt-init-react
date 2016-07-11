import { expect } from 'chai';
import mockery from 'mockery';
import td from 'testdouble';

describe('<DevTools />', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    mockery.registerMock('./DevTools-prod', td.function());
    mockery.registerMock('./DevTools-dev', td.function());
  });
  afterEach(() => {
    td.reset();
    mockery.deregisterAll();
    mockery.disable();
  });
  ['production', 'development', 'test'].forEach((env) => {
    it(`chooses the correct DevTools in ${env}`, () => {
      td.replace(process, 'env', { NODE_ENV: env });
      const DevTools = require('~/src/app/containers/DevTools');
      expect(DevTools).to.be.a('Function');
    });
  });
});
