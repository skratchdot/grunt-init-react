import DevTools from '~/src/app/containers/DevTools-prod';
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

describe('<DevTools />', () => {
  it('renders production devtools as "false"', () => {
    const wrapper = render(<DevTools />);
    expect(wrapper.html()).to.eql('');
    expect(wrapper.text()).to.eql('');
  });
});
