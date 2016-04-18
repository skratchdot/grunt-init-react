import React, { Component } from 'react';
import DevTools from './DevTools';
import Footer from '../components/Footer';
import GithubCorner from 'react-github-corner';
import { Grid } from 'react-bootstrap';
import Header from '../components/Header';
import pathGet from 'object-path-get';
import stringToCssName from '../helpers/stringToCssName';

class App extends Component {
  render() {
    const path = pathGet(this, 'this.children.props.route.path', '');
    const pageParams = pathGet(this, 'props.params', {});
    const githubUrl = 'https://github.com/{%= username %}/{%= name %}';
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

export default App;
