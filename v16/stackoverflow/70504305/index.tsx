import { RefObject, useEffect, useRef } from 'react';

interface IDivPosition {
  divRef: RefObject<HTMLDivElement>;
}

export const useDivPosition = ({ divRef }: IDivPosition) => {
  useEffect(() => {
    console.log(divRef);
  });
  return null;
};

const Home = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const x = useDivPosition({ divRef });

  return x;
};
