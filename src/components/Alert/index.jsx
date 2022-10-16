import React from "react";

const Alert = ({
    style, divStyle, title, description, ...otherProps
}) => (
  <div className={divStyle} >
    <span 
        className={style} 
        {...otherProps}
    >
      {title}
    </span>
    {description}
  </div>
);

export default Alert;