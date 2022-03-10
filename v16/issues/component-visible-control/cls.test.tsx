import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import TempComp from './cls';

describe('TempComp', () => {
  test('should render component', async () => {
    render(<TempComp visible />);
    expect(await screen.findByText(/TempComp/)).toBeTruthy();
  });
  test('should not render component', () => {
    render(<TempComp visible={false} />);
    waitFor(() => {
      expect(screen.queryByText(/TempComp/)).toBeFalsy();
    });
  });
});
