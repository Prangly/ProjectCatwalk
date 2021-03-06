import React from 'react';

import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import DetailText from './DetailText';
import sampleProduct from '../../../SampleData/SampleProduct';

describe('Detail Text tests', () => {
  it('should render the product slogan on the page', () => {
    render(<DetailText product={sampleProduct} />);
    expect(screen.getByText('Blend in to your crowd')).toBeInTheDocument();
  });
});
