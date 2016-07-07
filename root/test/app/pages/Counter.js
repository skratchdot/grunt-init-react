import { Counter } from '~/src/app/pages/Counter';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

describe('pages -> <Counter />', () => {
  it('renders <Counter /> page', () => {
    const wrapper = mount(<Counter counter={5} />);
    expect(wrapper.text()).contains('Current Value: 5');
  });
});
