import React from "react";
import { CounterProvider } from "./components/CounterProvider";
import Counter from "./components/View/CounterView";

const CounterView: React.FC = () => {
  return (
    <CounterProvider initialValue={0}>
      <Counter />
    </CounterProvider>
  );
};

export default CounterView;
