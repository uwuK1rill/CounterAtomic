"use client";

import React, { createContext, useState } from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

export const CounterProvider: React.FC<{ initialValue: number }> = ({
  children,
  initialValue,
}: {
  initialValue: number;
  children?: React.ReactNode;
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};