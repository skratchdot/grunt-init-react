import { mount, shallow } from 'enzyme';
import { ActionHome } from 'material-ui/svg-icons';
import { MenuItemExternal } from '~/src/app/components/MenuItemExternal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { expect } from 'chai';
import td from 'testdouble';

const title = 'TEST_PRIMARY_TEXT';
const url = 'http://example.com/test/url.html';

describe('<MenuItemExternal />', () => {
  afterEach(() => td.reset());
  it('renders a MenuItemExternal with the correct text', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <MenuItemExternal
          primaryText={title}
          leftIcon={<ActionHome />}
          url={url}
        />
      </MuiThemeProvider>
    );
    expect(wrapper.text()).to.eql(title);
  });
  it('handles going to the specified external url', () => {
    const wrapper = shallow(
      <MenuItemExternal
        primaryText={title}
        leftIcon={<ActionHome />}
        url={url}
      />
    );
    const replaceLocation = td.function();
    td.replace(global, 'document', {
      location: {
        replace: replaceLocation
      }
    });
    const menuItem = wrapper.find('MenuItem');
    expect(menuItem.length).to.eql(1);
    expect(td.explain(replaceLocation).callCount).to.eql(0);
    menuItem.simulate('touchTap');
    expect(td.explain(replaceLocation).callCount).to.eql(1);
    td.verify(replaceLocation(url));
  });
});
