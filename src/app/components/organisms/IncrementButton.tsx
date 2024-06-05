import React, { useContext } from "react";
import { CounterContext } from "../CounterProvider";
import Button from "../atoms/Button";

const IncrementButton: React.FC = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("CounterContext is undefined");
  }

  const { increment } = context;

  return (
    <Button onClick={increment}>Increment</Button>
  );
};

export default IncrementButton;
