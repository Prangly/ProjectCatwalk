/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import "babel-polyfill";
import {
  render, screen, fireEvent, waitFor
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

  it('should change the style on icon click', async () => {
    render(<ProductDetail
    />);
    const image = screen.getByTestId('carouselImage')
    expect(image.src).toContain('1501')
    const button = screen.getAllByTestId('styleIcon')[1];
    fireEvent.click(button)
    await waitFor(() => expect(image.src).toContain('15337'))
    expect(image.src).toContain('15337')
    expect(image.src).not.toContain('1501')
  });
});
