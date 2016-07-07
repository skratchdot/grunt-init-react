import { Home } from '~/src/app/pages/Home';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import packageInfo from '~/package.json';

describe('pages -> <Home />', () => {
  it('renders <Home /> page', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.text()).contains(packageInfo.name);
  });
});
