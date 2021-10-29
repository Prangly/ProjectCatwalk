/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import RandOC from './RelatedItemsAndOutfitCreation';

describe('RelatedItemsAndOutfitCreation test', () => {
  it('should recognize react testing library methods', () => {
    render(<RandOC />);
    expect(screen.getByText('Related Items and Outfit Creation'));
  });
  it('should identify "relatedItems" component by data test ID', () => {
    render(<RandOC />);
    expect(screen.getByTestId('relatedItems')).toBeInTheDocument();
  });
  it('should render an "outfit" component', () => {
    render(<RandOC />);
    expect(screen.getByText('Outfit')).toBeInTheDocument();
  });
});
