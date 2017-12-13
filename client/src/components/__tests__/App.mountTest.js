import React from 'react';
import 'raf/polyfill';
import {shallow, configure, mount } from 'enzyme';
import App from '../App.jsx';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('it will either mount or not', () => {
	it('will attempt to mount app', () => {
		const component = mount(<App testing="test" />);
		expect(component.find('.mercHome').exists()).toBe(true);
	});
});