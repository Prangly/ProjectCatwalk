/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import RatAndRev from './RatingsAndReviews';

describe('Ratings and Reviews tests', () => {
  it('shoudl recognize react testing library methods', () => {
    render(<RatAndRev />);
    expect(screen.getByTestId('ratAndRev'))
      .toBeInTheDocument();
  });

  it('should contain a "writeAReview" component', () => {
    render(<RatAndRev />);
    expect(screen.getByTestId('writeAReview'))
      .toBeInTheDocument();
  });
});
