/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import RatAndRev from './RatingsAndReviews';
import SampleReviews from '../../SampleData/SampleReviews';

describe('Ratings and Reviews tests', () => {
  it('should recognize react testing library methods', () => {
    render(<RatAndRev currentProduct={SampleReviews.results[0]} />);
    expect(screen.getByTestId('ratAndRev'))
      .toBeInTheDocument();
  });

  it('should contain a "writeAReview" component', () => {
    render(<RatAndRev currentProduct={SampleReviews.results[0]} />);
    expect(screen.getByTestId('writeAReview'))
      .toBeInTheDocument();
  });

  it('should contain a "reviewsList" component', () => {
    render(<RatAndRev currentProduct={SampleReviews.results[0]} />);
    expect(screen.getByTestId('reviewsList'))
      .toBeInTheDocument();
  });
});
