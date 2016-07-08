import {
  ActionBugReport, NavigationMoreVert
} from 'material-ui/svg-icons';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import GithubIcon from '~/src/app/icons/GithubIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import { connect } from 'react-redux';
import { getRouteList } from '~/src/app/routes';
import packageInfo from '~/package.json';
import { push } from 'react-router-redux';

const author = packageInfo.author.name;
const githubUrl = `https://github.com/${author}/${packageInfo.name}/`;
const issuesUrl = `${packageInfo.bugs.url}`;
const leave = (url) => {
  return () => document.location.href = url;
};

class Header extends Component {
  render() {
    const { dispatch, routerPath } = this.props;
    const routes = getRouteList();
    const activeRoute = routes.find((r) => r.get('path') === routerPath);
    const height = 50;
    let icon;
    let title;
    if (activeRoute) {
      title = activeRoute.get('title');
      icon = React.cloneElement(activeRoute.get('icon'), {
        color: 'white',
        style: {
          height: height
        }
      });
    }
    const linkStyle = {
      textDecoration: 'none',
      color: 'white'
    };
    return (
      <header>
        <AppBar
          titleStyle={{ lineHeight: null, fontSize: null }}
          title={
            <div>
              <div style={{ float: 'left' }}>
                <h1 style={{ margin: 0, lineHeight: `${height}px` }}>
                  <Link to={`/${packageInfo.name}`} style={linkStyle}>
                    {packageInfo.name.toUpperCase()}
                  </Link>
                </h1>
              </div>
              <div style={{ float: 'right' }}>
                <div style={{ float: 'left', margin: '0px 15px' }}>
                  {icon}
                </div>
                <div style={{ float: 'left' }}>
                  <h1 style={{
                    lineHeight: `${height}px`,
                    fontSize: '15px',
                    margin: 0
                  }}>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          }
          showMenuIconButton={false}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>
              }
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <Subheader>Navigation</Subheader>
              {routes.filter((route) => route.get('key') !== 'notfound')
                .map((route) => <MenuItem
                  primaryText={route.get('title')}
                  leftIcon={route.get('icon')}
                  onTouchTap={() => dispatch(push(route.get('link')))}
              />)}
              <Divider />
              <Subheader>External Links</Subheader>
              <MenuItem primaryText="Source Code"
                leftIcon={<GithubIcon />}
                onTouchTap={leave(githubUrl)} />
              <MenuItem primaryText="Report Bug"
                leftIcon={<ActionBugReport />}
                onTouchTap={leave(issuesUrl)} />
            </IconMenu>
          }
        />
      </header>
    );
  }
}

Header.propTypes = {
  routerPath: React.PropTypes.string.isRequired
};

Header.contextTypes = {
  router: React.PropTypes.object
};

export default connect((state) => {
  return {
    routing: state.routing
  };
})(Header);
