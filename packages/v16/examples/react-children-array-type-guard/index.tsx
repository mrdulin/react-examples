import React, { ReactNode } from 'react';

interface QuestionsProps {}

const isArrayChildren = (children: any): children is ReactNode[] => {
  return React.Children.count(children) > 1;
};

export default function Questions({ children }: React.PropsWithChildren<QuestionsProps>) {
  return <div>{isArrayChildren(children) ? children.join('\n') : children}</div>;
}
