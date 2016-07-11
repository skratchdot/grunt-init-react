/*
import React from 'react';
import { expect } from 'chai';
import routes from '~/src/app/routes/index';
import { shallow } from 'enzyme';
let wrapper;

describe('routes', () => {
  beforeEach(() => {
    wrapper = shallow(<div>{routes}</div>);
  });
  it('should export all routes', () => {
    expect(wrapper.find('Route')).to.have.length(7);
  });
  it('should export route: /home', () => {
    expect(wrapper.find('Route[path="/home"]')).to.have.length(1);
  });
  it('should export route: /files', () => {
    const filePath = wrapper.find('Route[path="/files"]');
    expect(filePath).to.have.length(1);
    expect(filePath.children().find('Route')).to.have.length(1);
    expect(filePath.children().find('Route').prop('path')).to.eql(':id');
  });
});
*/
