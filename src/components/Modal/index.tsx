import React, { PropsWithChildren, ReactElement } from "react";
import classNames from "clsx";
import "./Modal.css";
interface ModalProps extends PropsWithChildren {
  open: boolean;
  title?: string;
  className?: string;
}

export default function Modal({
  open,
  children,
  title,
  className,
}: ModalProps): ReactElement {
  return (
    <div hidden={!open}>
      <div className="modal">
        <div className={classNames("modal_content", className)}>
          <header className="modal_header">{title}</header>
          {children}
        </div>
      </div>
    </div>
  );
}
