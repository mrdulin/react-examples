//@ts-nocheck
import React, { useEffect, useRef } from "react";

export const Child = React.forwardRef((props, ref) => {
  console.log("ref: ", ref);

  // option 1
  // const divRef = ref || React.createRef();

  // option 2
  // const _ref = useRef(null);
  // const divRef = ref || _ref;

  // option 3
  const divRef = useRef(ref?.current);

  useEffect(() => {
    console.log("divRef: ", divRef.current);
  }, []);

  return <div ref={divRef}>child</div>;
});
