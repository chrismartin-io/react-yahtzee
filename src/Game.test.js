import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Game from './Game';

it ('renders without crashing', () => {
  shallow(<Game />);
});

it ('updates locked array in state', () => {
  let wrapper = mount(<Game />);
  wrapper.find('button').first().simulate('click');
  expect(wrapper.state().locked[0]).toEqual(true);
});