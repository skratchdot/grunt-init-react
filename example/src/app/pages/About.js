import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import readmeHtml from '~/README.md';

class About extends Component {
  render() {
    return (
      <Jumbotron dangerouslySetInnerHTML={{ __html: readmeHtml }} />
    );
  }
}

export default connect()(About);
