import React from 'react';
import { Row, Col } from 'react-bootstrap';

module.exports = React.createClass({
	render: function () {
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
});
