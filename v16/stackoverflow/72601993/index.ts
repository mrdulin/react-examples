import { Renderer, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { useState } from 'react';

const useFetch = () => {
  const [data] = useState(1);
  return { data };
};

let renderedHook: RenderHookResult<unknown, { data: number }, Renderer<unknown>>;

describe('72601993', () => {
  beforeEach(() => {
    renderedHook = renderHook(() => useFetch());
  });

  test('.....', () => {
    expect(renderedHook.result.current.data).toBe(1);
  });
});
