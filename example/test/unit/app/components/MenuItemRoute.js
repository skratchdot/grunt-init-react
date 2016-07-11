import { mount, shallow } from 'enzyme';
import { MenuItemRoute } from '~/src/app/components/MenuItemRoute';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { expect } from 'chai';
import { getRouteList } from '~/src/app/routes';
import td from 'testdouble';

const routes = getRouteList();

describe('<MenuItemRoute />', () => {
  afterEach(() => td.reset());
  it('renders a MenuItemRoute with the correct text', () => {
    const route = routes.get(0);
    const wrapper = mount(
      <MuiThemeProvider>
        <MenuItemRoute route={route} />
      </MuiThemeProvider>
    );
    expect(wrapper.text()).to.eql(route.get('title'));
  });
  it('handles going to the specified external url', () => {
    const route = routes.get(0);
    const dispatch = td.function();
    const wrapper = shallow(
      <MenuItemRoute route={route} dispatch={dispatch} />
    );
    const menuItem = wrapper.find('MenuItem');
    expect(menuItem.length).to.eql(1);
    expect(td.explain(dispatch).callCount).to.eql(0);
    menuItem.simulate('touchTap');
    expect(td.explain(dispatch).callCount).to.eql(1);
  });
});
