import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import packageInfo from '~/package.json';

export class NotFound extends Component {
  render() {
    return (
      <div style={{ padding: 40 }}>
        <Paper style={{ padding: 40 }}>
          <h1 className="title">404 - Not Found</h1>
          <p>
            We couldn&#39;t find the page you are looking for.
            You may want to visit the home page by clicking
            the button below:
          </p>
          <p>
            <RaisedButton label="Homepage" primary={true} containerElement={
              <Link to={`/${packageInfo.name}`} />
            } />
          </p>
        </Paper>
      </div>
    );
  }
}

export default connect()(NotFound);
