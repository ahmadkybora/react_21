import React from "react";
import CardMedia from '@mui/material/CardMedia';
import { 
    Widget,
  } from "../../../components";
import Box from '@mui/material/Box';

const ImageContent = ( props ) => {
    return(
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Widget>
                    <CardMedia
                        sx={{ maxWidth: 500 }}
                        component="img"
                        height="300"
                        image={props.image}
                        alt="Paella dish"
                        />
                </Widget>
                <Widget>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Widget>
                            <CardMedia
                                sx={{ maxWidth: 100 }}
                                component="img"
                                height="100"
                                image={props.image}
                                alt="Paella dish"
                                />
                        </Widget>
                        <Widget>
                            <CardMedia
                                sx={{ maxWidth: 100 }}
                                component="img"
                                height="100"
                                image={props.image}
                                alt="Paella dish"
                                />
                        </Widget>
                        <Widget>
                            <CardMedia
                                sx={{ maxWidth: 100 }}
                                component="img"
                                height="100"
                                image={props.image}
                                alt="Paella dish"
                                />
                        </Widget>
                        <Widget>
                            <CardMedia
                                sx={{ maxWidth: 100 }}
                                component="img"
                                height="100"
                                image={props.image}
                                alt="Paella dish"
                                />
                        </Widget>
                    </Box>
                </Widget>
            </Box>
        </>
    );
}

export default ImageContent;
