import React from 'react';
import { Grid } from 'react-bootstrap';
import pathGet from 'object-path-get';
import Header from './Header';
import Footer from './Footer';
import stringToCssName from '../helpers/stringToCssName';

module.exports = React.createClass({
	render: function () {
		const path = pathGet(this, 'props.children.props.route.path', '');
		const pageParams = pathGet(this, 'props.children.props.params', {});
		return (
			<div className={`page-${stringToCssName(path)}`}>
				<Grid>
					<Header pageParams={pageParams} />
					{this.props.children}
					<Footer />
				</Grid>
			</div>
		);
	}
});
