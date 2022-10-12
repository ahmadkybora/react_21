import React from "react";

const SelectOption = ({
    style, divStyle, name, value, label, ...otherProps
}) => (
  divStyle ? 
    <div className={divStyle}>
      <select label={label}>
        {value && value.map((val) => (
          <option key={val} value={val}>{val}</option>
        ))}
      </select>
    </div>
  :
  <>
    <select label={label}>
      {value && value.map((val) => (
        <option key={val} value={val}>{val}</option>
      ))}
    </select>
  </>
);

export default SelectOption;