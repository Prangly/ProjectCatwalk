/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import QuestionsAndAnswers from './QuestionsAndAnswers';

describe('QuestionsAndAnswers test', () => {
  it('should recognize react testing library methods', () => {
    render(<QuestionsAndAnswers />);
    expect(screen.getByText('Questions and Answers'));
  });
});
