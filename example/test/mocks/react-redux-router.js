import td from 'testdouble';

export default function () {
  return {
    routerMiddleware: td.function(),
    syncHistoryWithStore: td.function()
  };
}
