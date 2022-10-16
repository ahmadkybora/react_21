import React from "react";

const Avatar = ({
    style, divStyle, src, alt, ...otherProps
}) => (
  <div className={divStyle} >
    <img 
        className={style} 
        src="/docs/images/people/profile-picture-5.jpg" 
        alt="Bordered avatar" 
        />
  </div>
);

export default Avatar;