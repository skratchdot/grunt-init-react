import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export class MenuItemRoute extends Component {
  render() {
    const { dispatch, route } = this.props;
    return (
      <MenuItem
        primaryText={route.get('title')}
        leftIcon={route.get('icon')}
        onTouchTap={() => dispatch(push(route.get('link')))}
      />
    );
  }
}

MenuItemRoute.propTypes = {
  route: React.PropTypes.object.isRequired
};

export default connect()(MenuItemRoute);
