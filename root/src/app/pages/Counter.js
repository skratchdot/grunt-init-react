import React, { Component } from 'react';
import { increment, set } from '~/src/app/actions/counter';
import { Box } from 'react-layout-components';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

export class Counter extends Component {
  render() {
    const { dispatch, counter } = this.props;
    const buttonStyle = { margin: 10 };
    return (
      <div style={{ padding: 40 }}>
        <Paper style={{ padding: 40, textAlign: 'center' }}>
          <h1 className="title">
            Redux Counter Example:
          </h1>
          <h2>
            Current Value: <strong>{counter}</strong>
          </h2>
          <Box center style={{ width: '100%' }}>
            <RaisedButton label="Decrement By 10"
              secondary={true} style={buttonStyle}
              onClick={() => dispatch(increment(-10))} />
            <RaisedButton label="Decrement By 1"
              primary={true} style={buttonStyle}
              onClick={() => dispatch(increment(-1))} />
            <RaisedButton label="Set To 0"
              style={buttonStyle}
              onClick={() => dispatch(set(0))} />
            <RaisedButton label="Increment By 1"
              primary={true} style={buttonStyle}
              onClick={() => dispatch(increment(1))} />
            <RaisedButton label="Increment By 10"
              secondary={true} style={buttonStyle}
              onClick={() => dispatch(increment(10))} />
          </Box>
        </Paper>
      </div>
    );
  }
}

export default connect(function (state) {
  return {
    counter: state.counter
  };
})(Counter);
