import React from "react";
import classNames from "clsx";
import "./Button.css";
export default function Button({ children, className, ...props }) {
  return (
    <button className={classNames("button", className)} {...props}>
      {children}
    </button>
  );
}
