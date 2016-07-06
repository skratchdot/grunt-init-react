import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import marked from 'marked';
import readmeContents from '~/README.md';
const readmeHtml = marked(readmeContents);

class About extends Component {
  render() {
    return (
      <Jumbotron dangerouslySetInnerHTML={{ __html: readmeHtml }} />
    );
  }
}

export default connect()(About);
