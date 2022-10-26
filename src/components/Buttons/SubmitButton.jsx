import React from "react";

import Button from '@mui/material/Button';

function SubmitButton({ title, icon, ...otherProps }) {

  return (
    <Button
      {...otherProps}
    >
      {title}
    </Button>
  );
}

export default SubmitButton;
