import { expect } from 'chai';
import { getMockPath } from '~/test/util';
import mockery from 'mockery';
import reactReduxRouterMock from '~/test/mocks/react-redux-router';
import reduxMock from '~/test/mocks/redux';
import reduxRouterMock from '~/test/mocks/redux-router';
import reduxThunkMock from '~/test/mocks/redux-thunk';
import td from 'testdouble';
let configureStore;

describe('configureStore-prod', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    // mocks
    mockery.registerMock('react-router-redux', reactReduxRouterMock());
    mockery.registerMock('react-router', reduxRouterMock());
    mockery.registerMock('react-thunk', reduxThunkMock());
    mockery.registerMock('redux', reduxMock());
    mockery.registerMock(getMockPath('~/src/app/reducers'), td.function());
    configureStore = require('~/src/app/store/configureStore-prod').default;
  });
  afterEach(() => {
    td.reset();
    mockery.deregisterAll();
    mockery.disable();
  });
  it('works when configureStore() is called', () => {
    const store = configureStore();
    expect(store.mockStore).to.be.true;
  });
});
