import React from 'react';
import { shallow, mount } from 'enzyme';
import Game, { NUM_DICE } from './Game';

it ('renders without crashing', () => {
  shallow(<Game />);
});

it ('updates locked array in state', () => {
  let wrapper = mount(<Game />);
  wrapper.find('button').first().simulate('click');
  expect(wrapper.state().locked[0]).toEqual(true);
});

it ("Doesn't allow a reroll after 0 rerolls left", () => {
  let wrapper = mount(<Game />);
  wrapper.setState({ rollsLeft: 0, locked: Array(NUM_DICE).fill(true)});
  wrapper.find('button').first().simulate('click');
  expect(wrapper.state().locked[0]).toEqual(true);
});

it ("Doesn't allow additional scoring on a rule row that has an existing score?", () => {
  let wrapper = mount(<Game />);
  wrapper.setState({ scores: { ones: 2 }});
  wrapper.find('tr').first().simulate('click');
  expect(wrapper.state().scores.ones).toEqual(2);
})