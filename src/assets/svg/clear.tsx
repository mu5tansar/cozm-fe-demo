import { ComponentPropsWithoutRef } from "react";
interface ClearIconProps extends ComponentPropsWithoutRef<"svg"> {
  className?: string;
}
export default function ClearIcon(props: ClearIconProps) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 2L16.5 16.5" stroke="#707070" stroke-width="3" />
      <path d="M17 2L2.5 16.5" stroke="#707070" stroke-width="3" />
    </svg>
  );
}
