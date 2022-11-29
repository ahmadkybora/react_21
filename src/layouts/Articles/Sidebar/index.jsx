import React from "react";
import { 
    Widget,
  } from "../../../components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent, Typography } from "@mui/material";    
import { red } from '@mui/material/colors';

let credits = [
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        path: "/brands", 
        border: '1px dashed grey',
        image: require("../../../assets/img/banner.jpeg"),
        description: "",
        path: "article/1",
    },
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        image: require("../../../assets/img/banner.jpeg"),
        description: "",
        path: "article/2",
    },
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        image: require("../../../assets/img/banner.jpeg"),
        description: "",
        path: "article/3",
    },
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        image: require("../../../assets/img/banner.jpeg"),
        description: "",
        path: "article/4",
    },
];

let brands = [
    {
        title: "Shrimp and Chorizo", 
    },
    {
        title: "Shrimp and Chorizo", 
    },
    {
        title: "Shrimp and Chorizo", 
    },
    {
        title: "Shrimp and Chorizo", 
    },
    {
        title: "Shrimp and Chorizo", 
    },
];

let categories = [
    {
        title: "Chorizo Paella", 
    },
    {
        title: "Chorizo Paella", 
    },
    {
        title: "Chorizo Paella", 
    },
    {
        title: "Chorizo Paella", 
    },
    {
        title: "Chorizo Paella", 
    },
];

const Sidebar = () => {
    return(
        <Widget>
                <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardHeader
                        sx={{ bgcolor: red[100] }}
                        title="Latest posts"
                        />
                    <CardContent>
                        {brands.map((brand, index) => (
                            <Typography sx={{ maxWidth: 245, m: 2 }}>
                                {brand.title}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>
                <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardHeader
                        sx={{ bgcolor: red[100] }}
                        title="The most visited content"
                        />
                    <CardContent>
                        {categories.map((category, index) => (
                            <Typography sx={{ maxWidth: 245, m: 2 }}>
                                {category.title}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>
        </Widget>
    );
}

export default Sidebar;
