import React from "react";
import "./Modal.css";
export default function Modal({ children, title }) {
  return (
    <div className="modal">
      <div className="modal_content">
        <header className="modal_header">{title}</header>
        {children}
      </div>
    </div>
  );
}
