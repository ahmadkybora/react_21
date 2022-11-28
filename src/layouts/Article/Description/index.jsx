import React from "react";
import { 
    Widget,
  } from "../../../components";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Description = (props) => {
    return(
        <Widget>
            <Widget>
                <CardMedia
                    sx={{ maxWidth: 100 }}
                    component="img"
                    height="100"
                    image={props.image}
                    alt="Paella dish"
                    />
            </Widget>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Widget>
    );
}

export default Description;
