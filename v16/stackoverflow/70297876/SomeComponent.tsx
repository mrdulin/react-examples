import React, { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';

export const SomeComponent = () => {
  const [requestCount, setRequestCount] = useState(-1);
  // should execute macro task queued by setTimeout
  const ref = useRef(null);

  // option 1
  // const doSomeWork = () => {
  //   setRequestCount((pre) => pre + 1);
  //   setTimeout(doSomeWork, 3000);
  // };

  // option 2
  const doSomeWork = useCallback(() => {
    setRequestCount(requestCount + 1);
    if (ref.current) return;
    ref.current = true;
  }, [requestCount]);

  useEffect(() => {
    if (ref.current) {
      setTimeout(doSomeWork, 3000);
    }
  }, [ref.current, doSomeWork]);

  return (
    <>
      <button onClick={doSomeWork}>Click</button>
      {requestCount}
    </>
  );
};
