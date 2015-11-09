import React from 'react';
import { Jumbotron } from 'react-bootstrap';

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Jumbotron className="text-center">
          <h1 className="title">
            grunt-init-react
            <br />
            <small>grunt-init template for a very basic react project.</small>
          </h1>
          <p>
            This is an example home page
          </p>
        </Jumbotron>
      </div>
    );
  }
});
