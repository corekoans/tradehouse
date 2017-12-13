import React from 'react';
import { connect } from 'react-redux';
import { shallow, configure, mount } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import 'raf/polyfill';
import ProductsView from '../../containers/ProductsView.jsx';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Products view works', () => {
	const expectedState = 'expectedState';

	const mapStateToProps = state => ({
		state
	});

	const mapDispatchToProps = dispatch => ({
		dispatchProp() {
			dispatch(action);
		}
	});

	const store = createMockStore();

	// const ProductsView = mount(<ProductsView />);

	const ConnectedComponent = connect(undefined, mapStateToProps)(ProductsView);

	// const component = shallowWithStore(<ProductsView />, store);

	it('placeholder test', () => {
		expect('jest-test').toBe('jest-test');
	});
});
