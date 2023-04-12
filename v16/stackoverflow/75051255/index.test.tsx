import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { App } from '.';

describe('75051255', () => {
  test('should pass', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({ status: 503 });
    render(<App />);
    await waitFor(() => screen.getByText('Loading...'))
    await waitFor(() => screen.getByText('error boundary'));
    screen.debug();
  });
});
