import { applyMiddleware, compose, createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import { expect } from 'chai';
import rootReducer from '~/src/app/reducers';
import thunk from 'redux-thunk';

export function getMockStore(initialState) {
  const store = compose(
    applyMiddleware(thunk)
  )(createStore)(rootReducer, initialState);
  return store;
}

export function testMockStore(initialState) {
  const middlewares = [ thunk ];
  const mockStore = configureMockStore(middlewares);
  return mockStore(initialState);
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
