import React from "react";

const Badge = ({
    style, divStyle, name, type, ...otherProps
}) => (
  <div className={divStyle} >
    <span 
      class={style}>
        Default
    </span>
  </div>
);

export default Badge;