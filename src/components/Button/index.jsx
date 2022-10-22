import React from "react";

const Button = ({
    style, divStyle, name, type, ...otherProps
}) => (
  <div className={divStyle}>
      <button 
        type={type}
        className={style}
        {...otherProps}
      >
        {name}
      </button>
  </div>
);

export default Button;