import 'jest';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './index';

describe('useCallback-vs-function-outside-component', () => {
  test('should pass', () => {
    const { rerender } = render(<App dep={1} />);
    const button = screen.getByText(/click me/);
    fireEvent.click(button);
    rerender(<App dep={1} />);
    fireEvent.click(button);
  });
});
