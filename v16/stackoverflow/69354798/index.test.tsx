import {fireEvent, render, screen, act} from '@testing-library/react';
import React from 'react';
import MyComponent from './';

describe('69354798', () => {
  test('should pass', async () => {
    const mockMediaDevices = {
      getUserMedia: jest.fn().mockResolvedValue('test stream')
    }
    Object.defineProperty(window.navigator, 'mediaDevices', {
      value: mockMediaDevices
    })
    render(<MyComponent/>)
    await act(async () => {
      fireEvent.click(screen.getByText(/Request permissions/))
    })
    fireEvent.click(screen.getByText(/Start recording/))
  })
})

