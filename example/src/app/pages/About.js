import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import marked from 'marked';
const fs = require('fs');
const readmeContents = fs.readFileSync(`${__dirname}/../../../README.md`,
  'utf-8');
const readmeHtml = marked(readmeContents);

class About extends Component {
  render() {
    return (
      <Jumbotron dangerouslySetInnerHTML={{ __html: readmeHtml }} />
    );
  }
}

export default connect()(About);
