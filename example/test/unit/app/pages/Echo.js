import { Echo } from '~/src/app/pages/Echo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

describe('pages -> <Echo />', () => {
  it('renders <Echo /> page', () => {
    const testEcho = 'TEST_ECHO';
    const testPath = '//test_path';
    const wrapper = mount(
      <MuiThemeProvider>
        <Echo
          counter={5}
          params={{ echo: testEcho }}
          route={{ path: testPath }}
        />
      </MuiThemeProvider>
    );
    expect(wrapper.text()).contains(testEcho);
    expect(wrapper.text()).contains(testPath);
  });
});
