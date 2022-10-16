import React from "react";

const Accordion = ({
    style, divStyle, name, type, ...otherProps
}) => (
  <div className={divStyle} >
    <button 
        className={style} 
        name={name}
        type={type}
        {...otherProps}
    >
        {name}
    </button>
  </div>
);

export default Accordion;