import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

describe('unstable_batchedUpdates', () => {
  test('should batch update the states and render once for sync handler', () => {
    let renderCounts = 0;
    const TestComp = () => {
      const [count, setCount] = useState(0);
      const [visible, setVisible] = useState(false);
      renderCounts++;
      return (
        <div
          onClick={() => {
            setCount(count + 1);
            setVisible(!visible);
          }}
        >
          TestComp
        </div>
      );
    };

    render(<TestComp />);
    expect(renderCounts).toBe(1);
    const el = screen.getByText('TestComp');
    fireEvent.click(el);
    expect(renderCounts).toBe(2);
  });

  test('should batch update the states and render once for async handler', () => {
    jest.useFakeTimers();
    let renderCounts = 0;
    const TestComp = () => {
      const [count, setCount] = useState(0);
      const [visible, setVisible] = useState(false);
      renderCounts++;
      return (
        <div
          onClick={() => {
            setTimeout(() => {
              ReactDOM.unstable_batchedUpdates(() => {
                setCount(count + 1);
                setVisible(!visible);
              });
            }, 1000);
          }}
        >
          TestComp
        </div>
      );
    };

    render(<TestComp />);
    expect(renderCounts).toBe(1);
    const el = screen.getByText('TestComp');
    fireEvent.click(el);
    jest.advanceTimersByTime(1000);
    expect(renderCounts).toBe(2);
  });
});
