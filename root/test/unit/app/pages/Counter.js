import ConnectedCounter, {
  Counter, mapDispatchToProps
} from '~/src/app/pages/Counter';
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
      const onIncrement = td.function();
      const onSet = td.function();
      const wrapper = shallow(
        <Counter
          counter={5}
          onIncrement={onIncrement}
          onSet={onSet}
        />
      );
      const button = wrapper.find('RaisedButton').at(buttonIndex);
      expect(button.length).to.eql(1);

      // before touch
      expect(td.explain(onIncrement).callCount).to.eql(0);
      expect(td.explain(setCount).callCount).to.eql(0);
      button.simulate('touchTap');

      // after touch
      const incrementCount = buttonIndex === 2 ? 0 : 1;
      const setCount = buttonIndex === 2 ? 1 : 0;
      expect(td.explain(onIncrement).callCount).to.eql(incrementCount);
      expect(td.explain(onSet).callCount).to.eql(setCount);
    });
  });
  it('uses mapDispatchToProps when connected', () => {
    const dispatch = td.function();
    const map = mapDispatchToProps(dispatch);
    expect(map).to.be.an.object;
    expect(map).to.have.property('onIncrement');
    expect(map).to.have.property('onSet');
    map.onIncrement(5);
    map.onSet(10);
    expect(td.explain(dispatch).callCount).to.eql(2);
  });
});
