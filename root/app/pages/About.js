import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import marked from 'marked';
const fs = require('fs');
const readmeContents = marked(fs.readFileSync(`${__dirname}/../../README.md`, 'utf-8'));

module.exports = React.createClass({
  render: function () {
    return (
      <Jumbotron dangerouslySetInnerHTML={{__html: readmeContents}} />
    );
  }
});
