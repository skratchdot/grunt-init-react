import { Footer } from '~/src/app/components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

describe('<Footer />', () => {
  it('renders 1 footer', () => {
    const wrapper = render(
      <MuiThemeProvider>
        <Footer />
      </MuiThemeProvider>
    );
    expect(wrapper.find('footer').length).to.eql(1);
  });
  it('renders the year', () => {
    const wrapper = render(
      <MuiThemeProvider>
        <Footer />
      </MuiThemeProvider>
    );
    const year = (new Date()).getFullYear();
    expect(wrapper.text()).to.contain(year);
  });
});
