import { getMockPath, getMockStore } from '~/test/util';
import React from 'react';
import { browserHistory } from 'react-router';
import { expect } from 'chai';
import mockery from 'mockery';
import { shallow } from 'enzyme';
import td from 'testdouble';

describe('<Root />', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false
    });
    mockery.registerMock(getMockPath('~/src/app/styles/app.less'),
      td.function());
  });
  afterEach(() => {
    td.reset();
    mockery.disable();
  });
  it('shallow renders a <Root />', () => {
    const Root = require('~/src/app/containers/Root').Root;
    const wrapper = shallow(
      <Root store={getMockStore()} history={browserHistory} />
    );
    expect(wrapper.find('Provider')).to.have.length(1);
    expect(wrapper.find('Router')).to.have.length(1);
    expect(wrapper.find('Route')).to.have.length.gt(2);
  });
});
