"use client";
import React from "react";
import styles from "./Text.module.css";

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <span className={styles.text}>{children}</span>;
};

export default Text;
