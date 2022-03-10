import React from 'react';
import { useEffect, useState } from 'react';
import { api } from './api';

const useRemoteData = () => {
  const [state, setState] = useState('');
  useEffect(() => {
    api.ajax().then(() => setState('fake data'));
  }, []);
  return state;
};

interface TempCompProps {
  visible?: boolean;
}
export function TempComp({ visible = true }: TempCompProps) {
  useRemoteData();
  if (!visible) return null;
  return <div>TempComp</div>;
}
