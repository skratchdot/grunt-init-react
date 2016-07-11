import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { NotFound } from '~/src/app/pages/NotFound';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

describe('pages -> <NotFound />', () => {
  it('renders <NotFound /> page', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <NotFound />
      </MuiThemeProvider>
    );
    expect(wrapper.text()).contains('404 - Not Found');
  });
});
