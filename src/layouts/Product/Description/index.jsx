import React from "react";
import { 
    Widget,
  } from "../../../components";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Description = (props) => {
    return(
        <Widget>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Widget>
    );
}

export default Description;
