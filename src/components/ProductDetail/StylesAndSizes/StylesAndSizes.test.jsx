import React from 'react';

import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import StylesAndSizes from './StylesAndSizes';
import sampleStyles from '../../../SampleData/SampleStyles';
import SampleStylesNoURL from '../../../SampleData/sampleStylesNoURL';
import ProductContext from '../../../ProductContext';

const contextRender = (ui) => render(
  <ProductContext.Provider value={{
    currentProductAvgRating: 0,
  }}
  >
    {ui}
  </ProductContext.Provider>,
);

describe('Styles and Sizes tests', () => {
  it('should render style icons', () => {
    contextRender(<StylesAndSizes
      addToOutfit={() => { }}
      setCurrentStyle={() => { }}
      name="test"
      productStyles={sampleStyles}
      currentStyle={0}
    />);
    expect(screen.getAllByTestId('styleIcon')[0]).toBeInTheDocument();
  });

  it('should render the proper number of style icons', () => {
    contextRender(<StylesAndSizes
      addToOutfit={() => { }}
      setCurrentStyle={() => { }}
      name="test"
      productStyles={sampleStyles}
      currentStyle={0}
    />);
    expect(screen.getAllByTestId('styleIcon').length).toEqual(6);
  });

  it('should render an icon even if style url is missing', () => {
    contextRender(<StylesAndSizes
      addToOutfit={() => { }}
      setCurrentStyle={() => { }}
      name="test"
      productStyles={SampleStylesNoURL}
      currentStyle={0}
    />);
    expect(screen.getAllByTestId('styleIcon').length).toEqual(4);
  });
});
