/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import "babel-polyfill";
import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import QuestionsAndAnswers from './QuestionsAndAnswers';

describe('QuestionsAndAnswers test', () => {
  it('should recognize react testing library methods', () => {
    expect(2).toBe(2);
    // render(<QuestionsAndAnswers />);
    // await expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
  });
});
