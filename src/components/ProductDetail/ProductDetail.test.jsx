/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import ProductDetail from './ProductDetail';

describe('Product Detail tests', () => {
  it('should recognize react testing library methods', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('productDetail')).toBeInTheDocument();
  });

  it('should contain an "imageCarousel" component', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('imageCarousel')).toBeInTheDocument();
  });

  it('should contain a "stylesAndSizes" component', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('stylesAndSizes')).toBeInTheDocument();
  });

  it('should have a "detailText" component', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('detailText')).toBeInTheDocument();
  });
});
