import { expect } from 'chai';
import { getMockPath } from '~/test/util';
import mockery from 'mockery';
import reactReduxRouterMock from '~/test/mocks/react-redux-router';
import reduxMock from '~/test/mocks/redux';
import reduxRouterMock from '~/test/mocks/redux-router';
import reduxThunkMock from '~/test/mocks/redux-thunk';
import td from 'testdouble';
let configureStore;

describe('configureStore-dev', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    mockery.registerMock('react-router-redux', reactReduxRouterMock());
    mockery.registerMock('react-router', reduxRouterMock());
    mockery.registerMock('react-thunk', reduxThunkMock());
    mockery.registerMock('redux', reduxMock());
    mockery.registerMock(getMockPath('~/src/app/containers/DevTools'), {
      instrument: td.function()
    });
    mockery.registerMock(getMockPath('~/src/app/reducers'), td.function());
    configureStore = require('~/src/app/store/configureStore-dev').default;
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
  it('works when DEVTOOLS are disabled', () => {
    td.replace(process, 'env', { DEVTOOLS: 'disabled' });
    const store = configureStore();
    expect(store.mockStore).to.be.true;
  });
  it('works when module.hot is true', () => {
    const theMod = module.children.filter(
      (m) => m.exports.default === configureStore
    )[0];
    theMod.hot = {
      accept: (one, two) => two()
    };
    const store = configureStore();
    expect(store.mockStore).to.be.true;
    delete theMod.hot;
  });
});
