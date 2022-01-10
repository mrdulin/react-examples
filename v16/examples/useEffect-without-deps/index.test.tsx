import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Example1, Example2, Example3 } from './';

describe('58579426', () => {
  test('Example1', () => {
    const { getByText } = render(<Example1 />);
    const button = getByText(/click/i);
    fireEvent.click(button);
    fireEvent.click(button);
  });

  test('Example2', () => {
    const { getByText } = render(<Example2 />);
    const button = getByText(/click/i);
    fireEvent.click(button);
    fireEvent.click(button);
  });

  test.only('Example3', () => {
    const { getByText } = render(<Example3 />);
    const button = getByText(/click/i);
    fireEvent.click(button);
    fireEvent.click(button);
  });
});
