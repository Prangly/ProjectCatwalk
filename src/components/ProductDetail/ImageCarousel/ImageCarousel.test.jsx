import React from 'react';
import "babel-polyfill";
import {
  render, screen, fireEvent, waitFor
} from '@testing-library/react';

import '@testing-library/jest-dom';
import ImageCarousel from './ImageCarousel';
import sampleStyles from '../../../SampleData/SampleStyles';
import sampleStylesNoURL from '../../../SampleData/SampleStylesNoURL';

describe('Image Carousel tests', () => {
  it('should render an image', () => {
    render(<ImageCarousel
      productStyles={sampleStyles}
      currentStyle={0}
    />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should change the image on button click', async () => {
    render(<ImageCarousel
      productStyles={sampleStyles}
      currentStyle={0}
    />);
    const image = screen.getByTestId('carouselImage')
    const button = screen.getByTestId('nextImageButton');
    fireEvent.click(button)
    await waitFor(() => expect(image.src).toContain('1534'))
    expect(image.src).toContain('1534')
    expect(image.src).not.toContain('1501')
  });

  it('should render a placeholder image when url is not found', async () => {
    render(<ImageCarousel
      productStyles={sampleStylesNoURL}
      currentStyle={0}
    />)
    const image = screen.getByTestId('carouselImage')
    expect(image.alt).toEqual('Image Not Found')
  })
});