/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

import {
  render, screen, waitFor
} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const customRender = (ui) => render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ui} />

    </Routes>
  </BrowserRouter>
);

describe('App tests', () => {
  it('should run  a test', () => {
    expect(2).toBe(2);
  });

  it('should recognize react testing library methods', async () => {
    customRender(<App />);
    await waitFor(() => expect(screen.getByText('Catwalk')).toBeInTheDocument());
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
  });
});
