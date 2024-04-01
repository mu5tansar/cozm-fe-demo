import React, { ComponentPropsWithoutRef, ReactElement } from "react";
import ClearIcon from "../../assets/svg/clear";
import HelpIcon from "../../assets/svg/help";
import "./FormField.css";
import { Control, useController } from "react-hook-form";

interface FormFieldProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  name: string;
  control: Control;
  onClear: (name: string) => void;
}

export default function FormField({
  label,
  name,
  control,
  onClear,
  ...props
}: FormFieldProps): ReactElement {
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
        <input className="formfield_input" {...field} {...props}></input>
        <div className="formfield_action">
          <ClearIcon
            className="formfield_icon"
            onClick={onClear ? () => onClear(name) : undefined}
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
