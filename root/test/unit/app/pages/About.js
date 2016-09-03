import { About } from '~/src/app/pages/About';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { expect } from 'chai';
import mockery from 'mockery';
import { mount } from 'enzyme';
import td from 'testdouble';

describe('pages -> <About />', () => {
  it('renders <About /> page', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <About />
      </MuiThemeProvider>
    );
    expect(wrapper.text()).contains('TEST_README');
  });
  it('renders <About /> page in non-test mode', () => {
    mockery.enable();
    mockery.registerMock('../../../README.md', '<div>TEST_README</div>');
    td.replace(process, 'env', {
      NODE_ENV: 'production'
    });
    const wrapper = mount(
      <MuiThemeProvider>
        <About />
      </MuiThemeProvider>
    );
    expect(wrapper.text()).contains('TEST_README');
    mockery.disable();
    td.reset();
  });
});
