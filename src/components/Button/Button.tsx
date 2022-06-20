import React from "react";

export interface ButtonProps {
  children: any;
}

const Button = (props: ButtonProps) => {
  return <button >{props.children}</button>;
};

export default Button;