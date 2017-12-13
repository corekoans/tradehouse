import React from 'react';
import 'raf/polyfill';
import {shallow, configure } from 'enzyme';
import App from '../App.jsx';
import Header from '../Header.jsx';

// Enzyme clauses
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('App.jsx renders an anchor to Merchant Home', () => {
	const applic = shallow(<App />);
	console.log('APP: ',applic);

	expect(applic.find('.notMercHome').exists()).toEqual(false);
  
});

describe('<App />', () => {
	it('should render one Foo component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(ProductList)).to.have.length(1)
	});
});

