import { Footer } from '~/src/app/components/Footer';
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

describe('<Footer />', () => {
  it('renders 1 footer', () => {
    const wrapper = render(<Footer />);
    expect(wrapper.find('footer').length).to.eql(1);
  });
  it('renders the year', () => {
    const wrapper = render(<Footer />);
    const year = (new Date()).getFullYear();
    expect(wrapper.text()).to.contain(year);
  });
});
