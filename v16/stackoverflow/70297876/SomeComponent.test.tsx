import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { SomeComponent } from './SomeComponent';

describe('70297876', () => {
  test('should pass', async () => {
    jest.useFakeTimers();
    const { container } = render(<SomeComponent />);
    expect(container).toMatchInlineSnapshot(`
<div>
  <button>
    Click
  </button>
  -1
</div>
`);
    const button = screen.getByText('Click');
    fireEvent.click(button);
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(container).toMatchInlineSnapshot(`
<div>
  <button>
    Click
  </button>
  1
</div>
`);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(container).toMatchInlineSnapshot(`
<div>
  <button>
    Click
  </button>
  2
</div>
`);
  });
});
