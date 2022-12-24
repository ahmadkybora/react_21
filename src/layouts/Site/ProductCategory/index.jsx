import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import { 
  Widget,
} from "../../../components";

let credits = [
    {
        name: "ProductCategory", 
        icon: <GroupIcon color="primary" />, 
        path: "/brands", 
        border: '1px dashed grey'
    },
    {
        name: "ProductCategory", 
        icon: <GroupIcon color="secondary" />, 
        path: "/articles", 
        border: '1px dashed grey'
    },
    {
        name: "ProductCategory", 
        icon: <GroupIcon color="success" />, 
        path: "/articles", 
        border: '1px dashed grey'
    },
    {
        name: "ProductCategory", 
        icon: <GroupIcon color="action" />, 
        path: "/product-categories", 
        border: '1px dashed grey'
    },
    {
        name: "ProductCategory", 
        icon: <GroupIcon color="disabled" />, 
        path: "/products", 
        border: '1px dashed grey',
    },
];

const ProductCategory = () => {
    return(
        <Widget>
            <Typography textAlign="center">Product Category</Typography>
            <Card sx={{ display: 'flex' }}>
                {credits.map((credit, index) => (
                    <Card sx={{ display: 'flex' }}>
                        <Box key={index} sx={{ m: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'text.disabled', border: credit.border }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {credit.icon}
                                    {credit.name}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </Card>
        </Widget>
    )
}

export default ProductCategory;
