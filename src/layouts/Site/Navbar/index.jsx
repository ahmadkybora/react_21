import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { 
  Widget,
} from "../../../components";
import { NavLink } from "react-router-dom";

let credits = [
    {
        name: "Brands", 
        icon: <GroupIcon color="primary" />, 
        path: "/brands", 
        border: '1px dashed grey',
        f: [
            {
                name: 'brand_1',
                path: '/brandid'
            },
            {name: '2',},
            {name: '3',},
            {name: '4',},
            {name: '5',},
            {name: '6',},
            {name: '7',},
        ]
    },
    {
        name: "ArticleCategories", 
        icon: <GroupIcon color="secondary" />, 
        path: "/articles", 
        border: '1px dashed grey',
        f: [
            {name: '1',},
            {name: '2',},
            {name: '3',},
            {name: '4',},
            {name: '5',},
            {name: '6',},
            {name: '7',},
        ]
    },
    {
        name: "Articles", 
        icon: <GroupIcon color="success" />, 
        path: "/articles", 
        border: '1px dashed grey',
        f: [
            {name: '1',},
            {name: '2',},
            {name: '3',},
            {name: '4',},
            {name: '5',},
            {name: '6',},
            {name: '7',},
        ]
    },
    {
        name: "ProductCategories", 
        icon: <GroupIcon color="action" />, 
        path: "/product-categories", 
        border: '1px dashed grey',
        f: [
            {name: '1',},
            {name: '2',},
            {name: '3',},
            {name: '4',},
            {name: '5',},
            {name: '6',},
            {name: '7',},
        ]
    },
    {
        name: "Products", 
        icon: <GroupIcon color="disabled" />, 
        path: "/products", 
        border: '1px dashed grey',
        f: [
            {name: '1',},
            {name: '2',},
            {name: '3',},
            {name: '4',},
            {name: '5',},
            {name: '6',},
            {name: '7',},
        ]
    },
];

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Widget>
            <Card sx={{ display: 'flex' }}>
                {credits.map((credit, index) => (
                    <Card sx={{ display: 'flex' }}>
                        <Box key={index} sx={{ my: 1, mx: 3, display: 'flex', flexDirection: 'column', backgroundColor: 'text.disabled', border: credit.border }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Button
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {credit.name}
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                {console.log(credit.f)}
                                {credit.f.map((n, index) => (
                                    <MenuItem onClick={handleClose}>
                                        <NavLink to={n.path}>{n.name}</NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </Card>
        </Widget>
    )
}

export default Navbar;
