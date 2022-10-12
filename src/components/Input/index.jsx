import React from "react";

const Input = ({
    label, style, divStyle, name, type, ...otherProps
}) => (
  divStyle ? 
    <div className={divStyle}>
      <label htmlFor="name">{label}</label>
      <input 
          className={style} 
          name={name}
          type={type}
          {...otherProps}
      />
    </div>
  :
  <>
    <label htmlFor="name">{label}</label>
    <input
      className={style}
      name={name}
      type={type}
      {...otherProps}
    />
  </>
);

export default Input;