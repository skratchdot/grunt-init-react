import React, { Component } from 'react';
import { increment, set } from '~/src/app/actions/counter';
import { Box } from 'react-layout-components';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

export class Counter extends Component {
  render() {
    const { counter, onIncrement, onSet } = this.props;
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
              onTouchTap={() => onIncrement(-10)} />
            <RaisedButton label="Decrement By 1"
              primary={true} style={buttonStyle}
              onTouchTap={() => onIncrement(-1)} />
            <RaisedButton label="Set To 0"
              style={buttonStyle}
              onTouchTap={() => onSet(0)} />
            <RaisedButton label="Increment By 1"
              primary={true} style={buttonStyle}
              onTouchTap={() => onIncrement(1)} />
            <RaisedButton label="Increment By 10"
              secondary={true} style={buttonStyle}
              onTouchTap={() => onIncrement(10)} />
          </Box>
        </Paper>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.required,
  onIncrement: React.PropTypes.func,
  onSet: React.PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement: (val) => dispatch(increment(val)),
    onSet: (val) => dispatch(set(val))
  };
}

export default connect((state) => {
  return {
    counter: state.counter
  };
}, mapDispatchToProps)(Counter);
