import React from 'react';
import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import ReviewsList from './ReviewsList';

describe('Reveiws List tests', () => {
  it('should recognize react testing library methods', () => {
    render(<ReviewsList />);
    expect(screen.getByTestId('reviewsList'))
      .toBeInTheDocument();
  });

  it('should contain a "review" component', () => {
    render(<ReviewsList />);
    expect(screen.getByTestId('review'))
      .toBeInTheDocument();
  });
});
