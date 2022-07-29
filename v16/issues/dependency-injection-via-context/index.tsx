import React, { useContext } from 'react';
import { useEffect } from 'react';

export const DIContext = React.createContext<any>({});

const useConfig = () => ({ foo: 'bar' });
const useLifecycle = () => {
  useEffect(() => {
    console.log('useLifecycle mount');
  }, []);
};

export const DIValue = {
  useConfig,
  useLifecycle,
};

export const App = () => {
  return (
    <DIContext.Provider value={DIValue}>
      <SharedComponent />
    </DIContext.Provider>
  );
};

export const SharedComponent = () => {
  const { useLifecycle, useConfig } = useContext(DIContext);
  const config = useConfig();
  console.count('SharedComponent render');
  useLifecycle();
  useEffect(() => {
    console.log('SharedComponent mount');
  }, []);
  return <div>{JSON.stringify(config)}</div>;
};
