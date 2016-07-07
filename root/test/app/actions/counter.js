import * as actions from '~/src/app/actions/counter';
import { expect } from 'chai';
import td from 'testdouble';
import { testActions } from '~/test/util';

describe('counter actions', () => {
  afterEach(() => td.reset());
  it('creates INCREMENT_COUNTER when increment(value) is called', () => {
    [-5, -1, 0, 1, 5].forEach((value) => {
      expect(actions.increment(value)).to.eql({
        type: 'INCREMENT_COUNTER', value: value
      });
    });
  });
  it('creates SET_COUNTER when set(value) is called', () => {
    [-5, -1, 0, 1, 5].forEach((value) => {
      expect(actions.set(value)).to.eql({
        type: 'SET_COUNTER', value: value
      });
    });
  });
  it('handles incrementIfOdd()', (done) => {
    Promise.all([
      testActions(
        { counter: 1 },
        (dispatch) => dispatch(actions.incrementIfOdd()),
        [ { type: 'INCREMENT_COUNTER', value: 1 } ]
      ),
      testActions(
        { counter: 2 },
        (dispatch) => dispatch(actions.incrementIfOdd()),
        []
      ),
      testActions(
        { counter: 3 },
        (dispatch) => dispatch(actions.incrementIfOdd()),
        [ { type: 'INCREMENT_COUNTER', value: 1 } ]
      )
    ]).then(() => done(), done);
  });
  it('handles incrementAsync()', (done) => {
    td.replace(global, 'setTimeout', (fn, time) => {
      expect(time).to.eql(1000);
      fn();
    });
    testActions(
      { counter: 5 },
      (dispatch) => dispatch(actions.incrementAsync()),
      [ { type: 'INCREMENT_COUNTER', value: 1 } ]
    ).then(() => {
      done();
    }).catch(done);
  });
  it('handles incrementAsync(4000)', (done) => {
    const timeoutMs = 4000;
    td.replace(global, 'setTimeout', (fn, time) => {
      expect(time).to.eql(timeoutMs);
      fn();
    });
    testActions(
      { counter: 5 },
      (dispatch) => dispatch(actions.incrementAsync(timeoutMs)),
      [ { type: 'INCREMENT_COUNTER', value: 1 } ]
    ).then(() => {
      done();
    }).catch(done);
  });
});
