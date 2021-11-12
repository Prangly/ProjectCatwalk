/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import ProductContext from '../../ProductContext';

import '@testing-library/jest-dom';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import sampleProduct from '../../SampleData/SampleProduct';

const contextRender = (ui) => render(
  <ProductContext.Provider value={{
    currentProduct: sampleProduct,
  }}
  >
    {ui}
  </ProductContext.Provider>
);

describe('QuestionsAndAnswers test', () => {
  it('should recognize react testing library methods', () => {
    contextRender(<QuestionsAndAnswers currentProduct={sampleProduct} />);
    expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
  });
});
