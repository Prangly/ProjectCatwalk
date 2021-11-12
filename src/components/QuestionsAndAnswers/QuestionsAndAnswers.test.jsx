/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import sampleProduct from '../../SampleData/SampleProduct';

describe('QuestionsAndAnswers test', () => {
  it('should recognize react testing library methods', () => {
    render(<QuestionsAndAnswers currentProduct={sampleProduct} />);
    expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
  });
});
