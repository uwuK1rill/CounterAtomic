"use client";
import React from "react";
import Button from "../atoms/Button";

interface ButtonTextProps {
  onClick: () => void;
  buttonText: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ onClick, buttonText }) => {
  return (
    <Button onClick={onClick}>
      {buttonText}
    </Button>
  );
};

export default ButtonText;
