import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Nav } from 'react-bootstrap';
const packageInfo = require('../../package.json');

module.exports = React.createClass({
	contextTypes: {
    history: React.PropTypes.object
  },
	isLinkActive: function (pathname) {
		return this.context.history.isActive(pathname) ? 'active' : '';
	},
	render: function () {
		return (
			<div>
				<Row className="header">
					<Col md={6}>
						<Link to={`/${packageInfo.name}`}>
							<h1 className="title">
								grunt-init-react
								&nbsp;
								<small>grunt-init template for a very basic react project.</small>
							</h1>
						</Link>
					</Col>
					<Col md={6}>
						<Nav bsStyle="pills">
							<li key="home" className={
									this.isLinkActive(`/${packageInfo.name}`) +
									this.isLinkActive(`/${packageInfo.name}/home`)}>
								<Link to={`/${packageInfo.name}`}>Home</Link>
							</li>
							<li key="echo" className={this.isLinkActive(`/${packageInfo.name}/echo/${this.props.pageParams.echo}`)}>
								<Link to={`/${packageInfo.name}/echo`}>Echo</Link>
							</li>
						</Nav>
					</Col>
				</Row>
				<Row>
					<Col md={12}><div className="main-seperator"></div></Col>
				</Row>
			</div>
		);
	}
});
