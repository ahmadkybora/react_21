import React from "react";

import Fab from '@mui/material/Fab';

function ActionButton({ icon, ...otherProps }) {

  return (
    <Fab 
        {...otherProps}>
            {icon}
    </Fab>
  );
}

export default ActionButton;
