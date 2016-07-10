import '~/src/app/styles/app.less';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';
import { Router } from 'react-router';
import { getRoutes } from '~/src/app/routes';

export class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          {getRoutes()}
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};

export default connect()(Root);
