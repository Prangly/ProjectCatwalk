import React from 'react';
import "babel-polyfill";
import {
  render, screen, fireEvent, waitFor
} from '@testing-library/react';

import '@testing-library/jest-dom';
import ImageCarousel from './ImageCarousel';
import sampleStyles from '../../../SampleData/SampleStyles';

describe('Image Carousel tests', () => {
  it('should render an image', () => {
    render(<ImageCarousel
      productStyles={sampleStyles}
      currentStyle={0}
    />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should change the image on button click', async () => {
    console.log(sampleStyles)
    render(<ImageCarousel
      // product={}
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
});