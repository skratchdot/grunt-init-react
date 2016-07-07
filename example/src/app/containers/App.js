import React, { Component } from 'react';
import DevTools from './DevTools';
import Footer from '~/src/app/components/Footer';
import GithubCorner from 'react-github-corner';
import { Grid } from 'react-bootstrap';
import Header from '~/src/app/components/Header';
import { connect } from 'react-redux';
import pathGet from 'object-path-get';
import stringToCssName from '~/src/app/helpers/stringToCssName';

export class App extends Component {
  render() {
    const path = pathGet(this, 'this.children.props.route.path', '');
    const pageParams = pathGet(this, 'props.params', {});
    const githubUrl = 'https://github.com/skratchdot/grunt-init-react';
    return (
      <div className={`page-${stringToCssName(path)}`}>
        <Grid>
          <Header pageParams={pageParams} />
          {this.props.children}
          <Footer />
          <GithubCorner href={githubUrl} />
        </Grid>
        <DevTools />
      </div>
    );
  }
}

export default connect()(App);
