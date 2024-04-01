import React, { ComponentPropsWithoutRef } from "react";
import classNames from "clsx";
import "./Button.css";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
}
export default function Button({
  children,
  className,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button className={classNames("button", className)} {...props}>
      {children}
    </button>
  );
}
