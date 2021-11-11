import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
