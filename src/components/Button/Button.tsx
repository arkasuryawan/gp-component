import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: any;
}

const Button = (props: ButtonProps) => {
  return <button >{props.label}</button>;
};

export default Button;