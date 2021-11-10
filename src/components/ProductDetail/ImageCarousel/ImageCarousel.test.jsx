import React from 'react';
import 'babel-polyfill';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageCarousel from './ImageCarousel';
import sampleStyles from '../../../SampleData/SampleStyles';
import sampleStylesNoURL from '../../../SampleData/sampleStylesNoURL';
import sampleProduct from '../../../SampleData/SampleProduct';
import ProductDetail from '../ProductDetail';
import ProductContext from '../../../ProductContext';

const contextRender = (ui) => render(
  <ProductContext.Provider value={{
    currentProduct: sampleProduct,
  }}
  >
    {ui}
  </ProductContext.Provider>,
);

describe('Image Carousel tests', () => {
  it('should render an image', () => {
    contextRender(<ImageCarousel
      productStyles={sampleStyles}
      currentStyle={0}
      currentImage={0}
      setExpanded={() => { }}
      setCurrentImage={() => { }}
    />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  //   it('should change the image on button click', async () => {
  //     contextRender(<ProductDetail currentProduct={{}} />);
  //     await waitFor(() => screen.getByTestId('carouselImage'));
  //     const image = screen.getByTestId('carouselImage');
  //     const button = screen.getByTestId('nextImageButton');
  //     fireEvent.click(button);
  //     await waitFor(() => expect(image.src).toContain('1534'));
  //     expect(image.src).toContain('1534');
  //     expect(image.src).not.toContain('1501');
  //   });

  //   it('should render a placeholder image when url is not found', async () => {
  //     render(<ImageCarousel
  //       productStyles={sampleStylesNoURL}
  //       currentStyle={0}
  //       currentImage={0}
  //       setExpanded={() => { }}
  //       setCurrentImage={() => { }}
  //     />);
  //     const image = screen.getByTestId('carouselImage');
  //     expect(image.alt).toEqual('Image Not Found');
  //   });
});
