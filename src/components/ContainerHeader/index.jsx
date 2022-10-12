import React from "react";

const ContainerHeader = ({
  style, title,
}) => (
  <div 
    className={style}>
    <p>{title}</p>
  </div>
  );

export default ContainerHeader;
