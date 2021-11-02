/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import RandOC from './RelatedItemsAndOutfitCreation';
import RelatedItems from './RelatedItems/RelatedItems';
import Outfit from './Outfit/Outfit';
import Card from './Card/Card';

describe('RelatedItemsAndOutfitCreation test', () => {
  it('should recognize react testing library methods', () => {
    render(<RandOC />);
    expect(screen.getByText('Related Items and Outfit Creation'));
  });
  it('should identify "relatedItems" component by data test ID', () => {
    render(<RandOC />);
    expect(screen.getAllByTestId('relatedItems')[0]).toBeInTheDocument();
  });
  it('should render an "outfit" component', () => {
    render(<RandOC />);
    expect(screen.getAllByTestId('outfit')[0]).toBeInTheDocument();
  });
  it('should render "card" components', () => {
    render(<RandOC />);
    expect(screen.getAllByTestId('card')[0]).toBeInTheDocument();
  });
  // it('should open a modal window', () => {
  //   render(<RandOC />);
  //   const handleClose = jest.fn();
  //   const {getByText} = render(
  //     <Modal onClose={handleClose}>
  //       <div>test</div>
  //     </Modal>,
  //   );
  //   // Assert
  //   expect(getByText('test')).toBeTruthy()

    // Act
    // fireEvent.click(getByText(/close/i))



    // fireEvent.click(getByText())
    // expect()
  // })

});
