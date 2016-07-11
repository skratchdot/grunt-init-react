import mockery from 'mockery';
import td from 'testdouble';

describe('configureStore', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    mockery.registerMock('./configureStore-prod', td.function());
    mockery.registerMock('./configureStore-dev', td.function());
  });
  afterEach(() => {
    td.reset();
    mockery.deregisterAll();
    mockery.disable();
  });
  ['development', 'production', 'test'].forEach((env) => {
    it(`chooses the correct store in ${env}`, () => {
      td.replace(process, 'env', { NODE_ENV: env });
      const store = require('~/src/app/store/configureStore');
      store();
      td.verify(store());
    });
  });
});
