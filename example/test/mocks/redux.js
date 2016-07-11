import td from 'testdouble';

export default function () {
  return {
    applyMiddleware: td.function(),
    compose: () => {
      return () => {
        return () => {
          return {
            mockStore: true,
            replaceReducer: td.function()
          };
        };
      };
    },
    createStore: td.function(),
    combineReducers: td.function()
  };
}
