import React from 'react';
import 'raf/polyfill';
import { shallow, configure } from 'enzyme';
import App from '../App.jsx';
import Header from '../Header.jsx';


// Enzyme clauses
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Testing <App /> Component', () => {
		const applic = shallow(<App />);
		console.log('APP: ', applic);
	it('App.jsx renders an anchor to Merchant Home', () => {

		expect(applic.find('.notMercHome').exists()).toEqual(false);
		expect(applic.find('.mercHome').exists()).toEqual(true);
	});

	// it('App.jsx simulated btn when clicked, changes text to 'clicked'', () => {
	// 	applic.find('.btn').simulate('click');
	// 	expect(applic.find('.btn').text()).toEqual('clicked');
	// });

});

