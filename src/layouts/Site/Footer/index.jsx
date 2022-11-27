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
        s: [
            {id: 1, link1: "about brands1", path1: "brands1"},
            {id: 2, link2: "about brands2", path2: "brands2"},
            {id: 3, link3: "about brands3", path3: "brands3"},
            {id: 4, link4: "about brands4", path4: "brands4"},
        ],
        border: '1px dashed grey'
    },
    {
        name: "ArticleCategory", 
        icon: <GroupIcon color="secondary" />, 
        s: [
            {id: 1, link1: "about ArticleCategory 1", path1: "ArticleCategory1"},
            {id: 2, link2: "about ArticleCategory 2", path2: "ArticleCategory2"},
            {id: 3, link3: "about ArticleCategory 3", path3: "ArticleCategory3"},
            {id: 4, link4: "about ArticleCategory 4", path4: "ArticleCategory4"},
        ],
        border: '1px dashed grey'
    },
    {
        name: "Article", 
        icon: <GroupIcon color="success" />, 
        s: [
            {id: 1, link1: "about Article 1", path1: "/Article1"},
            {id: 2, link2: "about Article 2", path2: "/Article2"},
            {id: 3, link3: "about Article 3", path3: "/Article3"},
            {id: 4, link4: "about Article 4", path4: "/Article4"},
        ],
        border: '1px dashed grey'
    },
    {
        name: "ProductCategory", 
        icon: <GroupIcon color="action" />, 
        s: [
            {id: 1, link1: "about ProductCategory 1", path1: "/ProductCategory1"},
            {id: 2, link2: "about ProductCategory 2", path2: "/ProductCategory2"},
            {id: 3, link3: "about ProductCategory 3", path3: "/ProductCategory3"},
            {id: 4, link4: "about ProductCategory 4", path4: "/ProductCategory4"},
        ],
        border: '1px dashed grey'
    },
    {
        name: "Product", 
        icon: <GroupIcon color="disabled" />, 
        s: [
            {id: 1, link1: "about product 1", path1: "/product1"},
            {id: 2, link2: "about product 2", path2: "/product2"},
            {id: 3, link3: "about product 3", path3: "/product3"},
            {id: 4, link4: "about product 4", path4: "/product4"},
        ],
        border: '1px dashed grey',
    },
];

const Footer = () => {
    return(
        <Widget>
            <Card sx={{ display: 'flex' }}>
                {credits.map((credit, index) => (
                    <Card sx={{ display: 'flex' }}>
                        <Box key={index} sx={{ m: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'text.disabled', border: credit.border }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {credit.icon}
                                    {credit.name}
                                </Typography>
                                {credit.s.map((s) => (
                                    <>
                                        <Typography component="div" variant="p">
                                            <NavLink to={s.path1}>{s.link1}</NavLink>
                                        </Typography>
                                        <Typography component="div" variant="p">
                                            <NavLink to={s.path2}>{s.link2}</NavLink>
                                        </Typography>
                                        <Typography component="div" variant="p">
                                            <NavLink to={s.path3}>{s.link3}</NavLink>
                                        </Typography>
                                        <Typography component="div" variant="p">
                                            <NavLink to={s.path4}>{s.link4}</NavLink>
                                        </Typography>
                                    </>
                                ))}
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </Card>
        </Widget>
    )
}

export default Footer;
