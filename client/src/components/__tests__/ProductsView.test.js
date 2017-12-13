import React from 'react';
import { connect } from 'react-redux';
import { shallow, configure } from "enzyme";
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import 'raf/polyfill';
import ProductsView from '../../containers/ProductsView.jsx';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Products view works', () => {
	const 
})