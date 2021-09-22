import React from "react";

interface ThirdPartyComponentProps
  extends React.ComponentPropsWithRef<"input"> {}

const ThirdPartyComponent: React.ComponentType<ThirdPartyComponentProps> =
  React.forwardRef<HTMLInputElement, ThirdPartyComponentProps>(
    (props: ThirdPartyComponentProps, ref) => {
      return (
        <div>
          <input ref={ref} type="text" {...props} />
        </div>
      );
    }
  );

interface AppProps
  extends React.ComponentPropsWithRef<typeof ThirdPartyComponent> {}

export const App = React.forwardRef((props: AppProps, ref) => {
  return <ThirdPartyComponent ref={ref} {...props} />;
});
