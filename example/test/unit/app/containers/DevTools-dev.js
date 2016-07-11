import DevTools from '~/src/app/containers/DevTools-dev';
import { Provider } from 'react-redux';
import React from 'react';
import { expect } from 'chai';
import { getMockStore } from '~/test/util';
import { render } from 'enzyme';

describe('<DevTools />', () => {
  it('renders development devtools', () => {
    const wrapper = render(
      <Provider store={getMockStore({}, [DevTools.instrument()])}>
        <DevTools />
      </Provider>
    );
    const text = wrapper.text();
    ['Reset', 'Revert', 'Sweep', 'Commit'].forEach((s) => {
      expect(text).to.contain(s);
    });
    expect(wrapper.find('div')).to.have.length.gt(5);
  });
});
