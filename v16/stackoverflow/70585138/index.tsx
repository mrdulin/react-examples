import React, { createContext, useContext, useReducer } from 'react';

interface DomainContextInterface {
  domain: string;
  domainDispatch: React.Dispatch<any>;
}
const DomainContext = createContext<DomainContextInterface | null>(null);

export const CHANGE = 'CHANGE';
export const CLEAR = 'CLEAR';

const domainReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE:
      return action.value;
    case CLEAR:
      return '';
    default:
      return state;
  }
};
interface IDomainProviderProps {
  children: any;
}

export const DomainProvider = ({ children }: IDomainProviderProps) => {
  const [domain, domainDispatch] = useReducer(domainReducer, '');
  const domainData = { domain, domainDispatch };

  return <DomainContext.Provider value={domainData}>{children}</DomainContext.Provider>;
};

export const useDomainContext = () => useContext(DomainContext);

function Test() {
  return (
    <DomainContext.Consumer>
      {(value) => {
        return value.domain;
      }}
    </DomainContext.Consumer>
  );
}
