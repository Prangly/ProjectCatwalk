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
});