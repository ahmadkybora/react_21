import React from "react";

const Input = ({
    label, style, divStyle, name, type, ...otherProps
}) => (
  <div className={divStyle} >
    <label htmlFor="name">{label}</label>
    <input 
        className={style} 
        name={name}
        type={type}
        {...otherProps}
    />
  </div>
);

export default Input;