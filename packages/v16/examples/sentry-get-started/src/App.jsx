import React from 'react';

export default function App() {
  // const methodDoesNotExist = () => {
  //   debugger;
  // };
  return (
    <div>
      <button onClick={methodDoesNotExist}>Break the world</button>
    </div>
  );
}
