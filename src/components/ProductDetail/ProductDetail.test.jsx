import React from 'react';


import {render, fireEvent, waitFor, screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import ProductDetail from './ProductDetail'

describe('Product Detail tests', () => {

  it('should recognize react testing library methods', () => {

      render(<ProductDetail/>)
      expect(screen.getByTestId('productDetail')).toBeInTheDocument()
  })
})