import React from "react";

import { TextField } from "@material-ui/core";
import { useFormikContext } from "formik";
import { Label } from "reactstrap";

import ErrorMessage from "./ErrorMessage";

const TextArea = ({ disabled = false, label, name, rows = 4, rowsMax = 4, style, ...otherProps}) => {
  const {
    errors, 
    handleChange, 
    setFieldTouched, 
    touched,
  } = useFormikContext();

  const makeStyle = {
    backgroundColor: disabled ? "#f4f4f4" : "white",
    border: "1px #eae7e7 solid",
    width: "220px",
    ...style,
  };

  return (
    <div className=" row col-md-6 col-xs-12 form-group mb-4 mt-3">

      <Label className="label mr-2" htmlFor={name}>
        {label}
      </Label>
      <div className="d-inline-table col-md-6 col-xs-12">
        <TextField
          name={name}
          disabled={disabled}
          error={touched[name] && !!errors[name]}
          multiline
          onBlur={() => setFieldTouched(name)}
          onChange={handleChange(name)}
          rows={rows}
          rowsMax={rowsMax}
          style={makeStyle}
          {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </div>
    </div>
  );
}

export default TextArea;
