import React from 'react';
import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import QuestionsSearchInput from './QuestionsSearchInput';

describe('QuestionsSearchInput Tests', () => {
  it('should recognize a search input box', () => {
    render(<QuestionsSearchInput />);
    expect(screen.getByTestId('questionsSearchInput')).toBeInTheDocument();
  });
});
