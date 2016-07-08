import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import packageInfo from '~/package.json';

export class Home extends Component {
  render() {
    return (
      <div style={{ padding: 40 }}>
        <Paper style={{ padding: 40 }}>
          <h1 className="title">
            {packageInfo.name}
            <br />
            <small>{packageInfo.description}</small>
          </h1>
          <p>
            This is an example home page
          </p>
        </Paper>
      </div>
    );
  }
}

export default connect()(Home);
