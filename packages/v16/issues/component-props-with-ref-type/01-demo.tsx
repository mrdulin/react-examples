import React from 'react';

type InferHTMLElement<T> = T extends React.ComponentType<infer Props>
  ? Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<infer RefElement>, any>
    ? RefElement
    : never
  : never;

interface ThirdPartyComponentProps extends React.ComponentPropsWithRef<'input'> {}

const ThirdPartyComponent: React.ComponentType<ThirdPartyComponentProps> = React.forwardRef<
  HTMLInputElement,
  ThirdPartyComponentProps
>((props: ThirdPartyComponentProps, ref) => {
  return (
    <div>
      <input ref={ref} type="text" {...props} />
    </div>
  );
});

interface AppProps extends React.ComponentPropsWithRef<typeof ThirdPartyComponent> {}

export const App = React.forwardRef<InferHTMLElement<typeof ThirdPartyComponent>>((props: AppProps, ref) => {
  return <ThirdPartyComponent ref={ref} {...props} />;
});
