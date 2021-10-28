import React from 'react';

import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import App from './App';

describe('App tests', () => {
  it('should run  a test', () => {
    expect(2).toBe(2);
  });

  it('should recognize react testing library methods', () => {
    render(<App />);
    expect(screen.getByText('Hello from App')).toBeInTheDocument();
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
  });
});
