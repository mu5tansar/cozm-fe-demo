import React from "react";
import { ReactComponent as ClearIcon } from "../../assets/svg/clear.svg";
import { ReactComponent as HelpIcon } from "../../assets/svg/help.svg";
import "./FormField.css";
import { useController } from "react-hook-form";
export default function FormField({ label, name, control, onClear, ...props }) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });
  return (
    <div className="formfield">
      {label && <div className="formfield_label">{label}</div>}
      <div className="formfield_inputgroup">
        <input
          className="formfield_input"
          name={name}
          {...field}
          {...props}
        ></input>
        <div className="formfield_action">
          <ClearIcon
            className="formfield_icon"
            onClick={onClear ? () => onClear(name) : null}
          />
          <HelpIcon className="formfield_icon" />
        </div>
      </div>
      {error && (
        <div className="formfield_error">
          Please enter {label?.toLowerCase()} here
        </div>
      )}
    </div>
  );
}
