import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

// Hacer un test asincrono
test('Home work as expected', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Tendencias/i);
  expect(linkElement).toBeInTheDocument();
});

test('Form work as expectes', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox');
  const button = await screen.findByRole('button');

  fireEvent.change(input, { target: { value: 'Matrix' } });
  fireEvent.click(button);
  screen.debug();

  const title = await screen.findByText(/Gifs de Matrix/i);
  expect(title).toBeInTheDocument();

});