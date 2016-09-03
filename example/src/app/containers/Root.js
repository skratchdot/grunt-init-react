import '~/src/app/styles/app.less';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';
import { Router } from 'react-router';
import { getRoutes } from '~/src/app/routes';
import { openHeaderMenu } from '~/src/app/actions/headerMenuOpen';

export class Root extends Component {
  render() {
    const { store, history, onRouteUpdate } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} onUpdate={onRouteUpdate}>
          {getRoutes()}
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  onRouteUpdate: React.PropTypes.func,
  store: React.PropTypes.object.isRequired
};

export function mapDispatchToProps(dispatch) {
  return {
    onRouteUpdate: () => dispatch(openHeaderMenu(false))
  };
}

export default connect(null, mapDispatchToProps)(Root);
