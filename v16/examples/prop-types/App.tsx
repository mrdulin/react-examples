import React from "react";
import * as PTs from "prop-types";

interface Bill {
  realtime: boolean;
  premium: number;
  nextPremium: number;
  defaultSavingPremium: number;
  defaultReducedPriceRate: number;
}

interface AppProps {
  bill: Bill;
}
const App: React.FC<AppProps> = (props: AppProps) => {
  return <div>app</div>;
};

App.propTypes = {
  bill: PTs.exact<PTs.ValidationMap<Bill>>({
    realtime: PTs.bool.isRequired,
    premium: PTs.number.isRequired,
    nextPremium: PTs.number.isRequired,
    defaultSavingPremium: PTs.number.isRequired,
    defaultReducedPriceRate: PTs.number.isRequired,
  }).isRequired,
};
