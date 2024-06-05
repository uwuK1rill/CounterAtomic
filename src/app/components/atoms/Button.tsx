"use client";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
