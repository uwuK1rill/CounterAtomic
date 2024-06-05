"use client";

import React, { useContext } from "react";
import { CounterContext } from "../CounterProvider";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import Text from "../atoms/Text";
import styles from "../atoms/Button.module.css";

const CounterView: React.FC = () => {
  const { count } = useContext(CounterContext);

  return (
    <div className={styles.container}>
      <Text>{count}</Text>
      <IncrementButton />
      <DecrementButton />
    </div>
  );
};

export default CounterView;
