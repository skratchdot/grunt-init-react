import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
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
      <Jumbotron dangerouslySetInnerHTML={{ __html: readmeHtml }} />
    );
  }
}

export default connect()(About);
