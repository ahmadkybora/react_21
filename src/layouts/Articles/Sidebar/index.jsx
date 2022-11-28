import React from "react";
import { 
    Widget,
  } from "../../../components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

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

const Sidebar = () => {
    return(
        <Widget>
                <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                    {credits.map((credit, index) => (
                        <Card key={index} sx={{ maxWidth: 245, m: 2 }}>
                            <CardHeader
                                title={credit.title}
                                subheader={credit.createdAt}
                            />
                        </Card>
                    ))}
                </Card>
        </Widget>
    );
}

export default Sidebar;
