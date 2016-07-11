import { expect } from 'chai';
import { getMockPath } from '~/test/util';
import mockery from 'mockery';
import reactDomMock from '~/test/mocks/react-dom';
import reactHotLoaderMock from '~/test/mocks/react-hot-loader';
import reactMock from '~/test/mocks/react';
import reactReduxRouterMock from '~/test/mocks/react-redux-router';
import reactTapEventPluginMock from '~/test/mocks/react-tap-event-plugin';
import reduxRouterMock from '~/test/mocks/redux-router';
import td from 'testdouble';
let renderApp;

describe('app entry page', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    // mocks
    mockery.registerMock('react-hot-loader', reactHotLoaderMock());
    mockery.registerMock('react', reactMock());
    mockery.registerMock('./containers/Root',
      td.function());
    mockery.registerMock('react-router', reduxRouterMock());
    mockery.registerMock(getMockPath('~/src/app/store/configureStore'),
      td.function());
    mockery.registerMock('react-tap-event-plugin', reactTapEventPluginMock());
    mockery.registerMock('react-dom', reactDomMock());
    mockery.registerMock('react-router-redux', reactReduxRouterMock());
  });
  afterEach(() => {
    td.reset();
    mockery.deregisterAll();
    mockery.disable();
  });
  it('bootstraps our app correctly', () => {
    renderApp = require('~/src/app/index').renderApp;
  });
  it('works when module.hot is true', () => {
    const theMod = module.children.filter(
      (m) => m.exports.renderApp === renderApp
    )[0];
    theMod.hot = {
      accept: () => {}
    };
    renderApp();
    delete theMod.hot;
  });
});
