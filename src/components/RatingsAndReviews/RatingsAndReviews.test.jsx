/* eslint-disable react/jsx-no-undef */
import React, { useContext } from 'react';
import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import RatAndRev from './RatingsAndReviews';
import SampleReviews from '../../SampleData/SampleReviews';
import ProductContext from '../../ProductContext';

const contextRender = (ui) => render(
  <ProductContext.Provider value={{
    currentProductAvgRating: 0,
  }}>
    {ui}
  </ProductContext.Provider>
)

describe('Ratings and Reviews tests', () => {
  it('should recognize react testing library methods', () => {
    contextRender(<RatAndRev currentProduct={SampleReviews.results[0]} />);
    expect(screen.getByTestId('ratAndRev'))
      .toBeInTheDocument();
  });

  it('should contain a "reviewsList" component', () => {
    contextRender(<RatAndRev currentProduct={SampleReviews.results[0]} />);
    expect(screen.getByTestId('reviewsList'))
      .toBeInTheDocument();
  });
});
