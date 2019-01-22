import React from 'react';
import {render, cleanup} from 'react-testing-library';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
