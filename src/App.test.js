import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FortyThree from 'test-next-module';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('imports got module', () => {
  expect(FortyThree).toEqual(43);
});
