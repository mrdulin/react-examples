import React from 'react';
import { useEffect, useState } from 'react';

function multByTen(count) {
  return count * 10;
}

export function Example1() {
  const [count, setCount] = useState(0);

  let value;
  useEffect(() => {
    value = multByTen(count);
    console.log('value in useEffect: ', value);
  });
  console.log('render value: ', value);

  return <button onClick={() => setCount(count + 1)}>click</button>;
}

export function Example2() {
  const [count, setCount] = useState(0);

  const value = multByTen(count);
  console.log('render value: ', value);

  return <button onClick={() => setCount(count + 1)}>click</button>;
}

export function Example3() {
  const [count, setCount] = useState(0);

  console.log('render, count: ', count);
  useEffect(() => {
    if (count >= 1) {
      setCount(0);
    }
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>click</button>;
}
