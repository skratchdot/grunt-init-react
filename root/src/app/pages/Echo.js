import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import packageInfo from '~/package.json';

export class Echo extends Component {
  render() {
    const { params, route } = this.props;
    return (
      <div style={{ padding: 40 }}>
        <Paper style={{ padding: 40, textAlign: 'center' }}>
          <h4>Echo:</h4>
          &quot;{params.echo}&quot;
        </Paper>
        <br />
        <Paper style={{ padding: 40, textAlign: 'center' }}>
          <h4>Path:</h4>
          {route.path}
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

Echo.propTypes = {
  params: React.PropTypes.object.required,
  route: React.PropTypes.object.required
};

export default connect()(Echo);
