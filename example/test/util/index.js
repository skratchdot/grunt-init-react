import { applyMiddleware, compose, createStore } from 'redux';
import { mount, render, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { expect } from 'chai';
import path from 'path';
import rootReducer from '~/src/app/reducers';
import thunk from 'redux-thunk';

export function getMockStore(initialState, storeEnhancers = []) {
  const store = compose(
    applyMiddleware(thunk), ...storeEnhancers
  )(createStore)(rootReducer, initialState);
  return store;
}

export function testMockStore(initialState) {
  const middlewares = [ thunk ];
  const mockStore = configureMockStore(middlewares);
  return mockStore(initialState);
}

export function getMockPath(modulePath) {
  return path.resolve(modulePath.replace('~', `${__dirname}/../../`));
}

export function testActions(initialState, fn, expectedActions, subscribeCount) {
  return new Promise((resolve, reject) => {
    try {
      const store = testMockStore(initialState);
      let count = 0;
      if (!Number.isFinite(subscribeCount)) {
        subscribeCount = expectedActions.length;
      }
      const finish = () => {
        const actions = store.getActions();
        expect(actions).to.eql(expectedActions);
        resolve({ store, actions, expectedActions });
      };
      store.subscribe(() => {
        if (subscribeCount <= ++count) {
          finish();
        }
      });
      fn(store.dispatch, store.getState);
      if (subscribeCount === 0) {
        finish();
      }
    } catch (err) {
      reject(err);
    }
  });
}

function muiHelper(fn) {
  return (el, ...args) => {
    return fn(
      <MuiThemeProvider>
        el
      </MuiThemeProvider>,
      ...args
    );
  };
}

export const muiMount = muiHelper(mount);
export const muiRender = muiHelper(render);
export const muiShallow = muiHelper(shallow);
