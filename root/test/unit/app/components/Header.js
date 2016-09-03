import ConnectedHeader, {
  Header, mapDispatchToProps
} from '~/src/app/components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import React from 'react';
import { expect } from 'chai';
import { getMockStore } from '~/test/util';
import { mount } from 'enzyme';
import packageInfo from '~/package.json';
import td from 'testdouble';
let options;
let props;

describe('<Header />', () => {
  beforeEach(() => {
    const router = {
      router: {
        isActive: (p) => p === `/${packageInfo.name}`,
        createHref: td.function()
      }
    };
    props = {
      counter: 10,
      pageParams: { echo: null }
    };
    options = {
      childContextTypes: router,
      context: router
    };
  });
  afterEach(() => td.reset());
  it('renders 1 header', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Header {...props} />
      </MuiThemeProvider>, options);
    expect(wrapper.find('header')).to.have.length(1);
  });
  it('renders the connected <Header />', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Provider store={getMockStore()}>
          <ConnectedHeader {...props} />
        </Provider>
      </MuiThemeProvider>, options);
    expect(wrapper.find('header')).to.have.length(1);
  });
  it('renders the header with an activeRoute', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Header {...props} routerPath={`/${packageInfo.name}/about`} />
      </MuiThemeProvider>, options);
    expect(wrapper.find('header')).to.have.length(1);
  });
  it('uses mapDispatchToProps when connected', () => {
    const dispatch = td.function();
    const map = mapDispatchToProps(dispatch);
    expect(map).to.be.an.object;
    expect(map).to.have.property('onHeaderChange');
    map.onHeaderChange(true);
    expect(td.explain(dispatch).callCount).to.eql(1);
  });
});
