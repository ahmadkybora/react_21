import React from "react";

const TextArea = ({
    label, style, divStyle, name, rows, cols, value, ...otherProps
}) => (
  divStyle ? 
    <div className={divStyle}>
        <label htmlFor="name">{label}</label>
        <textArea 
            className={style} 
            name={name}
            id={name}
            rows={rows} 
            cols={cols}
            {...otherProps}
        >
          {value}
        </textArea>
    </div>
  :
  <>
    <label htmlFor="name">{label}</label>
    <TextArea
      className={style}
      name={name}
      type={type}
      {...otherProps}
      ></TextArea>
  </>
);

export default TextArea;