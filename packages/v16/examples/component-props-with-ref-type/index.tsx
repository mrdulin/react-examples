import React from "react";

interface ThirdPartyComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
const ThirdPartyComponent: React.ComponentType<ThirdPartyComponentProps> = (
  props: ThirdPartyComponentProps
) => {
  return (
    <div>
      <input type="text" {...props} />
    </div>
  );
};

type t = typeof ThirdPartyComponent;

interface AppProps
  extends React.ComponentPropsWithRef<typeof ThirdPartyComponent> {}
export const App = React.forwardRef<
  React.Ref<typeof ThirdPartyComponent>,
  AppProps
>((props: AppProps, ref) => {
  return <ThirdPartyComponent {...props} />;
});
