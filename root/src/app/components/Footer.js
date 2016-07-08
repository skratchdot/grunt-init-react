import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Box } from 'react-layout-components';
import GithubIcon from '~/src/app/icons/GithubIcon';
import { connect } from 'react-redux';
import packageInfo from '~/package.json';

const author = packageInfo.author.name;
const githubUrl = `https://github.com/${author}/${packageInfo.name}/`;
const year = (new Date()).getFullYear();

class Footer extends Component {
  render() {
    return (
      <footer>
        <AppBar
          titleStyle={{ height: 30, lineHeight: '30px', fontSize: null }}
          title={
            <Box fit justifyContent="space-between">
              <Box>
                <span>&copy; Copyright {year} &nbsp;</span>
                <a href={packageInfo.author.url} style={{ color: 'white' }}>
                  {author}
                </a>
              </Box>
              <Box>
                <a href={githubUrl} style={{ color: 'white' }}>
                  View on Github
                </a>
                <a href={githubUrl}>
                  <GithubIcon color="white" style={{
                    marginTop: 3,
                    marginLeft: 10
                  }} />
                </a>
              </Box>
            </Box>
          }
          showMenuIconButton={false}
        />
      </footer>
    );
  }
}

export default connect()(Footer);
