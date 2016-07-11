import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';

export const leave = (url) => {
  return () => document.location.replace(url);
};

export class MenuItemExternal extends Component {
  render() {
    const { leftIcon, primaryText, url } = this.props;
    return (
      <MenuItem
        primaryText={primaryText}
        leftIcon={leftIcon}
        onTouchTap={leave(url)}
      />
    );
  }
}


export default connect()(MenuItemExternal);
