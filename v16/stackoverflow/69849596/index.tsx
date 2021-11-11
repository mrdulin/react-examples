import React from 'react';
import { useEffect, useRef } from 'react';

export function App() {
  const textRef = useRef(null);
  let eventRef;
  const logEvent = (e) => {
    console.log(e);
  };
  useEffect(() => {
    if (textRef.current) {
      eventRef = textRef.current;
      textRef.current.addEventListener('onCustomEvent', logEvent);
    }
    return () => {
      if (eventRef) {
        eventRef.removeEventListener('onCustomEvent', logEvent);
      }
    };
  }, []);

  return <div ref={textRef}>123</div>;
}
