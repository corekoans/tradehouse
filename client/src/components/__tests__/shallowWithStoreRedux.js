import React from 'react';
import { connect } from 'react-redux';
import { shallow, configure } from "enzyme";
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import 'raf/polyfill';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('example shallowWithStore', () => {
  const ReactComponent = () => (<div>dummy component</div>);
  describe('state', () => {
    it('works', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = (state) => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);
    });
  });
  
  describe('dispatch', () => {
    it('works', () => {
      const action = {
        type: 'type',
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        },
      });
      const store = createMockStore();

      const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).toBe(true);
    });
  });
});

