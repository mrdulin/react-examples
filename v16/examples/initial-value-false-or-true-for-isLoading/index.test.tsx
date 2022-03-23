import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { App } from './';

describe('App', () => {
  test('should pass', async () => {
    render(<App />);
    // const button = screen.getByText(/fetch data/);
    // fireEvent.click(button);
    // expect(screen.getByText(/loading.../)).toBeTruthy();
    await waitFor(() => {
      //
      // expect(screen.getByText(/Child/)).toBeTruthy();
    });
  });
});
