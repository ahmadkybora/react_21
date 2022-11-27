import React from "react";
import CardMedia from '@mui/material/CardMedia';
import { 
    Widget,
  } from "../../../components";
  
const ImageContent = ( props ) => {
    return(
        <Widget>
            <CardMedia
                component="img"
                height="194"
                image={props.image}
                alt="Paella dish"
                />
        </Widget>
    );
}

export default ImageContent;
