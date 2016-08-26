import React, { Component } from 'react';
import { cyan500, cyan700 } from 'material-ui/styles/colors';
import DevTools from '~/src/app/containers/DevTools';
import Footer from '~/src/app/components/Footer';
import Header from '~/src/app/components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { VBox } from 'react-layout-components';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import getPath from 'object-path-get';
import setHeight from '~/src/app/util/setHeight';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    pickerHeaderColor: cyan500
  },
  appBar: {
    height: 50
  }
});

export class App extends Component {
  render() {
    const { routes } = this.props;
    const [ activeRoute ] = routes.slice(-1);
    const routerPath = getPath(activeRoute, 'path', '');
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <VBox fit>
          <VBox flexGrow={0} style={setHeight(50)}>
            <Header routerPath={routerPath} />
          </VBox>
          <VBox fit flexGrow={1} style={{
            width: '100%',
            height: '100%',
            overflow: 'auto'
          }}>
            {this.props.children}
          </VBox>
          <VBox flexGrow={0} style={setHeight(30)}>
            <Footer />
          </VBox>
          <DevTools />
        </VBox>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
