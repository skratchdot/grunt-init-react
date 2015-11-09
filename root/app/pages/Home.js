import React from 'react';
import { Jumbotron } from 'react-bootstrap';

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Jumbotron className="text-center">
          <h1 className="title">
            {%= name %}
            <br />
            <small>{%= description %}</small>
          </h1>
          <p>
            This is an example home page
          </p>
        </Jumbotron>
      </div>
    );
  }
});
