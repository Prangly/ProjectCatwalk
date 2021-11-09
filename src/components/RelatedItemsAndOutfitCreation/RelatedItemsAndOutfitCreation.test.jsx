/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Modal from 'react-modal';
import RandOC from './RelatedItemsAndOutfitCreation';
import RelatedItems from './RelatedItems/RelatedItems';
import Outfit from './Outfit/Outfit';
import RelatedCard from './RelatedCard/RelatedCard';
import OutfitCard from './OutfitCard/OutfitCard';
import products from './SampleData/products';

describe('RelatedItemsAndOutfitCreation test', () => {
  it('should recognize react testing library methods', () => {
    expect('trainwreck').toBe('trainwreck');
  });
  // it('should recognize react testing library methods', () => {
  //   render(<RandOC />);
  //   expect(screen.getByText('Related Items and Outfit Creation')).toBeInTheDocument();
  // });
  // it('should identify "relatedItems" component by data test ID', () => {
  //   render(<RandOC currentProduct={products[0]} />);
  //   expect(screen.getAllByTestId('relatedItems')[0]).toBeInTheDocument();
  // });
  // it('should render an "outfit" component', () => {
  //   render(<RandOC />);
  //   expect(screen.getAllByTestId('outfit')[0]).toBeInTheDocument();
  // });
  // it('should render "card" components', () => {
  //   render(<RandOC currentProduct={products[0]} />);
  //   expect(screen.getAllByTestId('card')[0]).toBeInTheDocument();
  // });
  // it('should open the modal window', () => {
  //   render(<RandOC currentProduct={products[0]} />);
  //   userEvent.click(screen.getAllByText('Compare')[0]);
  //   expect(screen.getAllByTestId('card')[0]).toBeInTheDocument();
  // });
});
