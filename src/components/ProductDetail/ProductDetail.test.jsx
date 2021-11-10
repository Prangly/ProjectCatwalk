/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import 'babel-polyfill';
import {
  render, screen, fireEvent, waitFor, wait,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import ProductDetail from './ProductDetail';
import sampleProduct from '../../SampleData/SampleProduct';
import ProductContext
  from '../../ProductContext';

const contextRender = (ui) => render(
  <ProductContext.Provider value={{
    currentProduct: sampleProduct,
  }}
  >
    {ui}
  </ProductContext.Provider>
);

describe('Product Detail tests', () => {
  it('should recognize react testing library methods', async () => {
    contextRender(<ProductDetail
      addToOutfit={() => { }}
      currentProduct={sampleProduct}
    />);
    await expect(screen.getByTestId('productDetail')).toBeInTheDocument();
    expect(screen.getByTestId('productDetail')).toBeInTheDocument();
  });

  it('should contain an "imageCarousel" component', async () => {
    contextRender(<ProductDetail
      addToOutfit={() => { }}
      currentProduct={sampleProduct}
    />);
    await waitFor(() => expect(screen.getByTestId('imageCarousel')).toBeInTheDocument());
    expect(screen.getByTestId('imageCarousel')).toBeInTheDocument();
  });

  it('should contain a "stylesAndSizes" component', async () => {
    contextRender(<ProductDetail
      addToOutfit={() => { }}
      currentProduct={sampleProduct}
    />);
    await waitFor(() => expect(screen.getByTestId('stylesAndSizes')).toBeInTheDocument());
    expect(screen.getByTestId('stylesAndSizes')).toBeInTheDocument();
  });

  it('should have a "detailText" component', async () => {
    contextRender(<ProductDetail
      addToOutfit={() => { }}
      currentProduct={sampleProduct}
    />);
    await waitFor(() => expect(screen.getByTestId('detailText')).toBeInTheDocument());
    expect(screen.getByTestId('detailText')).toBeInTheDocument();
  });

  it('should change the style on icon click', async () => {
    contextRender(<ProductDetail
      addToOutfit={() => { }}
      currentProduct={sampleProduct}
    />);
    await waitFor(() => screen.getByTestId('carouselImage'));
    const image = screen.getByTestId('carouselImage');
    expect(image.src).toContain('1501');
    const button = screen.getAllByTestId('styleIcon')[1];
    act(() => {
      fireEvent.click(button);
    });
    await waitFor(() => expect(image.src).toContain('15337'));
    expect(image.src).toContain('15337');
    expect(image.src).not.toContain('1501');
  });
});
