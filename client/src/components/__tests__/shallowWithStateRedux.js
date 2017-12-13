import React from 'react';
import { connect } from 'react-redux';
import { shallow, configure } from "enzyme";
import { shallowWithState } from 'enzyme-redux';
import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('example shallowWithState', () => {
  const ReactComponent = () => (<div>dummy component</div>);
  it('works', () => {
    const expectedState = 'expectedState';
    const mapStateToProps = (state) => ({
      state,
    });
    const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
    const component = shallowWithState(<ConnectedComponent />, expectedState);
    expect(component.props().state).toBe(expectedState);
  });
});