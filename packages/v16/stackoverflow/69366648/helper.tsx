import React from 'react';
import { ComponentType } from 'react';

const LINKS: any[] = [];
const createLinks = (Component: ComponentType) => {
  return LINKS.map((props) => {
    return {
      content: <Component {...props} />,
      id: props.id,
    };
  });
};
