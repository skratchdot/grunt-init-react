import React from 'react';
import { browserHistory } from 'react-router';
import { expect } from 'chai';
import { getMockStore } from '~/test/util';
import mockery from 'mockery';
import { shallow } from 'enzyme';
import td from 'testdouble';

describe('<Root />', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false
    });
    mockery.registerMock('../styles/app.less',
      td.function());
  });
  afterEach(() => {
    td.reset();
    mockery.disable();
  });
  it('shallow renders a <Root />', () => {
    const Root = require('~/src/app/containers/Root').Root;
    const onRouteUpdate = td.function();
    const wrapper = shallow(
      <Root
        store={getMockStore()}
        history={browserHistory}
        onRouteUpdate={onRouteUpdate}
      />
    );
    expect(wrapper.find('Provider')).to.have.length(1);
    expect(wrapper.find('Router')).to.have.length(1);
    expect(wrapper.find('Route')).to.have.length.gt(2);
  });
  it('uses mapDispatchToProps when connected', () => {
    const mapDispatchToProps = require('~/src/app/containers/Root').mapDispatchToProps;
    const dispatch = td.function();
    const map = mapDispatchToProps(dispatch);
    expect(map).to.be.an.object;
    expect(map).to.have.property('onRouteUpdate');
    map.onRouteUpdate();
    expect(td.explain(dispatch).callCount).to.eql(1);
  });
});
