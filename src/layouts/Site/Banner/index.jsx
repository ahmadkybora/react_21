import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { 
  Widget,
} from "../../../components";

const Banner = () => {
    return(
        <Widget>
            <Card sx={{ maxWidth: 1500 }}>
                <CardMedia
                    component="img"
                    height="440"
                    image={require("../../../assets/img/banner.jpeg")}
                    alt="green iguana"
                />
            </Card>
        </Widget>
    )
}

export default Banner;
