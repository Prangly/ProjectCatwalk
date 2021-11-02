/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import "babel-polyfill";
import {
  render, screen, fireEvent, waitFor
} from '@testing-library/react';

import '@testing-library/jest-dom';
import ProductDetail from './ProductDetail';
import sampleProduct from '../../SampleData/SampleProduct'
import { act } from 'react-dom/test-utils';
describe('Product Detail tests', () => {
  it('should recognize react testing library methods', async () => {
    render(<ProductDetail currentProduct={sampleProduct} />);
    await expect(screen.getByTestId('productDetail')).toBeInTheDocument();
    expect(screen.getByTestId('productDetail')).toBeInTheDocument();
  });

  it('should contain an "imageCarousel" component', async () => {
    render(<ProductDetail currentProduct={sampleProduct} />);
    await expect(screen.getByTestId('imageCarousel')).toBeInTheDocument();
    expect(screen.getByTestId('imageCarousel')).toBeInTheDocument();
  });

  it('should contain a "stylesAndSizes" component', async () => {
    render(<ProductDetail currentProduct={sampleProduct} />);
    await expect(screen.getByTestId('stylesAndSizes')).toBeInTheDocument();
    expect(screen.getByTestId('stylesAndSizes')).toBeInTheDocument();
  });

  it('should have a "detailText" component', async () => {
    render(<ProductDetail currentProduct={sampleProduct} />);
    await expect(screen.getByTestId('detailText')).toBeInTheDocument();
    expect(screen.getByTestId('detailText')).toBeInTheDocument();
  });

  it('should change the style on icon click', async () => {
    render(<ProductDetail currentProduct={sampleProduct}
    />);
    const image = screen.getByTestId('carouselImage')
    expect(image.src).toContain('1501')
    const button = screen.getAllByTestId('styleIcon')[1];
    act(() => {
      fireEvent.click(button)
    }

    )
    await waitFor(() => expect(image.src).toContain('15337'))
    expect(image.src).toContain('15337')
    expect(image.src).not.toContain('1501')
  });
});
