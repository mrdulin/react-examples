import _ from 'lodash';
import { useMemo, useState } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

const expensiveWork = ({ b, c }) => {
  console.count('expensiveWork');
  return b + c + 1000;
};

const useCustomV1 = () => {
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const v = useMemo(() => {
    return expensiveWork({ b, c });
  }, [b, c]);
  return { v, setC, setB };
};

const expensiveWorkMemoized = _.memoize(expensiveWork, JSON.stringify);
const useCustomV2 = () => {
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const v = expensiveWorkMemoized({ b, c });
  return { v, setC, setB };
};

describe('useCustom', () => {
  test('useMemo - expensiveWork execute count', () => {
    const { result } = renderHook(useCustomV1);
    act(() => result.current.setB(1));
    act(() => result.current.setC(1));
    act(() => result.current.setC(1));
    expect(result.current.v).toBe(1002);
  });

  test.only('memoize - expensiveWork execute count', () => {
    const { result } = renderHook(useCustomV2);
    act(() => result.current.setB(1));
    act(() => result.current.setC(1));
    act(() => result.current.setC(1));
    expect(result.current.v).toBe(1002);
  });
});
