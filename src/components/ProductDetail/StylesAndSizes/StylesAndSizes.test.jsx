import React from 'react';

import {
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import StylesAndSizes from './StylesAndSizes';
import sampleStyles from '../../../SampleData/SampleStyles';

describe('Styles and Sizes tests', () => {
  it('should render style icons', () => {
    render(<StylesAndSizes productStyles={sampleStyles} />);
    expect(screen.getAllByTestId('styleIcon')[0]).toBeInTheDocument();
  });
});
