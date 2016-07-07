import { About } from '~/src/app/pages/About';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

describe('pages -> <About />', () => {
  it('renders <About /> page', () => {
    const wrapper = mount(<About />);
    expect(wrapper.text()).contains('TEST_README');
  });
});
