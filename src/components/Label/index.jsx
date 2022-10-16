import React from "react";

const Label = ({
    htmlFor, style, name, ...otherProps
}) => (
    <label 
        htmlFor={htmlFor}
    >
        {name}
    </label>
);

export default Label;