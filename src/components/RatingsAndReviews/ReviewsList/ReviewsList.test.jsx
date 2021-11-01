import React from 'react';
import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import ReviewsList from './ReviewsList';
import SampleReviews from '../../../SampleData/SampleReviews';

describe('Reveiws List tests', () => {
  it('should recognize react testing library methods', () => {
    render(<ReviewsList reviews={SampleReviews} />);
    expect(screen.getByTestId('reviewsList'))
      .toBeInTheDocument();
  });
});
