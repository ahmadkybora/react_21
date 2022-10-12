import React from "react";

const ContainerHeader = ({
  style, title,
}) => (
  <div 
    className={style}>
    {title ? <p>{title}</p> : null}
  </div>
  );

export default ContainerHeader;
