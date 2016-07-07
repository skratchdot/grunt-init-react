import ConnectedHeader, { Header } from '~/src/app/components/Header';
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
    const wrapper = mount(<Header {...props} />, options);
    expect(wrapper.find('header')).to.have.length(1);
  });
  it('renders the connected <Header />', () => {
    const wrapper = mount(<Provider store={getMockStore()}>
      <ConnectedHeader {...props} />
    </Provider>, options);
    expect(wrapper.find('header')).to.have.length(1);
  });
});
