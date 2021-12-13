import React, { useCallback, useEffect } from 'react';

const Button = React.memo<{ onClick: any; children: any }>(({ onClick, children }) => {
  console.log('render child');
  return <button onClick={onClick}>{children}</button>;
});

const case1 = (dep) => {
  console.log('expensive work in case1, dep: ', dep);
};
export default function App({ dep }) {
  const case3 = useCallback(() => {
    console.log('expensive work in case3, dep: ', dep);
  }, [dep]);

  const case1Bound = case1.bind(this, dep);
  return (
    <div>
      {/* use function declared outside of a component */}
      {/* <Button onClick={() => case1(dep)}>click me</Button> */}
      {/* <Button onClick={case1Bound}>click me</Button> */}
      {/* useCallback */}
      <Button onClick={case3}>click me</Button>
    </div>
  );
}
