import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export class MenuItemRoute extends Component {
  render() {
    const { onTouchTap, route } = this.props;
    return (
      <MenuItem
        primaryText={route.get('title')}
        leftIcon={route.get('icon')}
        onTouchTap={onTouchTap}
      />
    );
  }
}

MenuItemRoute.propTypes = {
  onTouchTap: React.PropTypes.func,
  route: React.PropTypes.object.isRequired
};

export function mapDispatchToProps(dispatch, props) {
  return {
    onTouchTap: () => dispatch(push(props.route.get('link')))
  };
}

export default connect(null, mapDispatchToProps)(MenuItemRoute);
