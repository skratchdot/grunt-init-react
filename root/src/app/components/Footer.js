import { Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Row>
          <Col md={12}><div className="main-seperator"></div></Col>
        </Row>
        <Row className="footer">
          <Col md={6} className="copyright">
            &copy; Copyright {%= grunt.template.today('yyyy') %} &nbsp;
            <a href="{%= author_url %}">{%= author_name %}</a>
          </Col>
          <Col md={6} className="social">
          </Col>
        </Row>
        <br />
      </footer>
    );
  }
}

export default connect()(Footer);
