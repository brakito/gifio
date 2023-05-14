import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/GIFIO/i);
  expect(linkElement).toBeInTheDocument();
});
