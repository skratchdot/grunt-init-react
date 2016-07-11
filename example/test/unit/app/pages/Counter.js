import ConnectedCounter, { Counter } from '~/src/app/pages/Counter';
import { mount, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import React from 'react';
import { expect } from 'chai';
import { getMockStore } from '~/test/util';
import td from 'testdouble';

describe('pages -> <Counter />', () => {
  it('renders the <Counter /> page', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Counter counter={5} />
      </MuiThemeProvider>
    );
    expect(wrapper.text()).contains('Current Value: 5');
  });
  it('renders the connected <Counter /> page', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Provider store={getMockStore({ counter: 10 })}>
          <ConnectedCounter />
        </Provider>
      </MuiThemeProvider>);
    expect(wrapper.text()).contains('Current Value: 10');
  });
  [0, 1, 2, 3, 4].forEach((buttonIndex) => {
    it(`handles clicking on button #${buttonIndex}`, () => {
      const dispatch = td.function();
      const wrapper = shallow(
        <Counter counter={5} dispatch={dispatch} />
      );
      const button = wrapper.find('RaisedButton').at(buttonIndex);
      expect(button.length).to.eql(1);
      expect(td.explain(dispatch).callCount).to.eql(0);
      button.simulate('touchTap');
      expect(td.explain(dispatch).callCount).to.eql(1);
    });
  });
});
