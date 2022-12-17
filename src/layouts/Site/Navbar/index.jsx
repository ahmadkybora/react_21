import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import { 
  Widget,
} from "../../../components";
import { NavLink } from "react-router-dom";

let credits = [
    {
        name: "Brands", 
        icon: <GroupIcon color="primary" />, 
        path: "/brands", 
        border: '1px dashed grey'
    },
    {
        name: "ArticleCategories", 
        icon: <GroupIcon color="secondary" />, 
        path: "/articles", 
        border: '1px dashed grey'
    },
    {
        name: "Articles", 
        icon: <GroupIcon color="success" />, 
        path: "/articles", 
        border: '1px dashed grey'
    },
    {
        name: "ProductCategories", 
        icon: <GroupIcon color="action" />, 
        path: "/product-categories", 
        border: '1px dashed grey'
    },
    {
        name: "Products", 
        icon: <GroupIcon color="disabled" />, 
        path: "/products", 
        border: '1px dashed grey',
    },
];

const Navbar = () => {
    return(
        <Widget>
            <Card sx={{ display: 'flex' }}>
                {credits.map((credit, index) => (
                    <Card sx={{ display: 'flex' }}>
                        <Box key={index} sx={{ my: 1, mx: 3, display: 'flex', flexDirection: 'column', backgroundColor: 'text.disabled', border: credit.border }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {credit.icon}
                                    <NavLink style={{textDecoration: 'none'}} to={credit.path}>{credit.name}</NavLink>
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </Card>
        </Widget>
    )
}

export default Navbar;
