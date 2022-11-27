import React from "react";
import { 
    Widget,
  } from "../../../components";
import Typography from '@mui/material/Typography';

const Navbar = ( props ) => {
    return(
        <Widget>
            <Typography paragraph>
                {props.title}
            </Typography>
        </Widget>
    );
}

export default Navbar;
