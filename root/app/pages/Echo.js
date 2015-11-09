import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
const packageInfo = require('../../package.json');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Jumbotron className="text-center">
          <h4>Echo:</h4>
          {this.props.params.echo}
        </Jumbotron>
        <Jumbotron className="text-center">
          <h4>Path:</h4>
          {this.props.route.path}
        </Jumbotron>
        <Jumbotron className="text-center">
          <h4>Example Links:</h4>
          <Link to={`/${packageInfo.name}/echo/hello`}>hello</Link>
          <br />
          <Link to={`/${packageInfo.name}/echo/test`}>test</Link>
        </Jumbotron>
      </div>
    );
  }
});
