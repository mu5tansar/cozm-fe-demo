import React from "react";
import classNames from "clsx";
import "./Modal.css";
export default function Modal({ open, children, title, className }) {
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
