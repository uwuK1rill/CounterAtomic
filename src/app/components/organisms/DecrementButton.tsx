import React, { useContext } from "react";
import { CounterContext } from "../CounterProvider";
import Button from "../atoms/Button";

const DecrementButton: React.FC = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("CounterContext is undefined");
  }

  const { decrement } = context;

  return (
    <Button onClick={decrement}>Decrement</Button>
  );
};

export default DecrementButton;
