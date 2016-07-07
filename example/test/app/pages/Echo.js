import { Echo } from '~/src/app/pages/Echo';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

describe('pages -> <Echo />', () => {
  it('renders <Echo /> page', () => {
    const testEcho = 'TEST_ECHO';
    const testPath = '//test_path';
    const wrapper = mount(<Echo
      counter={5}
      params={{ echo: testEcho }}
      route={{ path: testPath }}
    />);
    expect(wrapper.text()).contains(testEcho);
    expect(wrapper.text()).contains(testPath);
  });
});
