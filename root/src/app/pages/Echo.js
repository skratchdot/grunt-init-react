import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import packageInfo from '~/package.json';

export class Echo extends Component {
  render() {
    return (
      <div style={{ padding: 40 }}>
        <Paper style={{ padding: 40, textAlign: 'center' }}>
          <h4>Echo:</h4>
          &quot;{this.props.params.echo}&quot;
        </Paper>
        <br />
        <Paper style={{ padding: 40, textAlign: 'center' }}>
          <h4>Path:</h4>
          {this.props.route.path}
        </Paper>
        <br />
        <Paper style={{ padding: 40, textAlign: 'center' }}>
          <h4>Example Links:</h4>
          <RaisedButton label="hello" primary={true} containerElement={
            <Link to={`/${packageInfo.name}/echo/hello`} />
          } />
          <div>&nbsp;</div>
          <RaisedButton label="test" primary={true} containerElement={
            <Link to={`/${packageInfo.name}/echo/test`} />
          } />
        </Paper>
      </div>
    );
  }
}

export default connect()(Echo);
