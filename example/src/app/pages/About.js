import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
let readmeHtml = '';
if (process.env.NODE_ENV === 'test') {
  readmeHtml = 'TEST_README';
} else {
  readmeHtml = require('~/README.md');
}

export class About extends Component {
  render() {
    return (
      <div id="about-page" style={{ padding: 40 }}>
        <Paper style={{ padding: 40 }}>
          <div dangerouslySetInnerHTML={{ __html: readmeHtml }}>
          </div>
        </Paper>
      </div>
    );
  }
}

export default connect()(About);
