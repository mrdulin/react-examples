import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MenuPage from './';

describe('menupage', () => {
  test('should pass', () => {
    render(<MenuPage />);
    const menuOrder = screen.getByTestId('menu-order-1') as HTMLSelectElement;
    fireEvent.change(menuOrder, { target: { value: '2' } });
    console.log(menuOrder.value);
  });
});
