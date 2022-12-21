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
import TextField from '@mui/material/TextField';

import { 
  Widget,
} from "../../../components";
import { NavLink } from "react-router-dom";

let articles = [
    {
        name: 'Article_1',
        path: "/Article_1", 
    },
    {
        name: 'Article_2',
        path: "/Article_2", 
    },
    {
        name: 'Article_3',
        path: "/Article_3", 
    },
    {
        name: 'Article_4',
        path: "/Article_4", 
    },
    {
        name: 'Article_5',
        path: "/Article_5", 
    },
    {
        name: 'Article_6',
        path: "/Article_6", 
    },
    {
        name: 'Article_7',
        path: "/Article_7", 
    },
];

let products = [
    {
        name: 'Product_1',
        path: "/product_1", 
    },
    {
        name: 'Product_2',
        path: "/product_2", 
    },
    {
        name: 'Product_3',
        path: "/product_3", 
    },
    {
        name: 'Product_4',
        path: "/product_1", 
    },
    {
        name: 'Product_5',
        path: "/product_1", 
    },
    {
        name: 'Product_6',
        path: "/product_6", 
    },
    {
        name: 'Product_7',
        path: "/product_7", 
    },
]

let credits = [
    {
        id: 1,
        name: "Articles", 
        icon: <GroupIcon color="success" />, 
        border: '1px dashed grey',
    },
    {
        id: 2,
        name: "Products", 
        icon: <GroupIcon color="disabled" />, 
        border: '1px dashed grey',
    },
    {
        id: 3,
        name: "About", 
        icon: <GroupIcon color="disabled" />, 
        border: '1px dashed grey',
    },
    {
        id: 4,  
        name: "Contact", 
        icon: <GroupIcon color="disabled" />, 
        border: '1px dashed grey',
    }
];

const Navbar = () => {
    const [anchorElArticle, setAnchorElArticle] = React.useState(null);
    const [anchorElProduct, setAnchorElProduct] = React.useState(null);
    const openArticle = Boolean(anchorElArticle);
    const openProduct = Boolean(anchorElProduct);
    const handleClickProduct = (event) => {
        setAnchorElProduct(event.currentTarget);
    };
    const handleCloseProduct = () => {
        setAnchorElProduct(null);
    };
    const handleClickArticle = (event) => {
        setAnchorElArticle(event.currentTarget);
    };
    const handleCloseArticle = () => {
        setAnchorElArticle(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
// const l = () => {
//     for(let i=0; i <= credits.length; i++) {
//         credits.map((credit, index) => (
//             <Card sx={{ display: 'flex' }}>
//                 <Box key={index} sx={{ my: 1, mx: 3, display: 'flex', flexDirection: 'column', backgroundColor: 'text.disabled', border: credit.border }}>
//                     <CardContent sx={{ flex: '1 0 auto' }}>
//                         <Button
//                             id="fade-button"
//                             aria-controls={open ? 'fade-menu' : undefined}
//                             aria-haspopup="true"
//                             aria-expanded={open ? 'true' : undefined}
//                             onClick={handleClick}
//                         >
//                             {credit.name}
//                         </Button>
//                         <Menu
//                             id="fade-menu"
//                             MenuListProps={{
//                             'aria-labelledby': 'fade-button',
//                             }}
//                             anchorEl={anchorEl}
//                             open={open}
//                             onClose={handleClose}
//                             TransitionComponent={Fade}
//                         >
//                             <Paper sx={{ 
//                                 width: 320, 
//                                 maxWidth: '100%', 
//                                 display: 'flex', 
//                                 flexWrap: 'wrap',
//                                 justifyContent: 'space-around',
//                                 }}>
//                                 {credits[i].f.map((n, index) => (
//                                     <MenuItem key={index} onClick={handleClose}>
//                                         <NavLink 
//                                             style={{ textDecoration: 'none' }}
//                                             to={n.path}
//                                             >
//                                                 {n.name}
//                                         </NavLink>
//                                     </MenuItem>
//                                 ))}
//                             </Paper>
//                         </Menu>
//                     </CardContent>
//                 </Box>
//             </Card>
//         ))
//     }
// }
    return(
        <Widget>
            <Card sx={{ display: 'flex' }}>
                <Card sx={{ display: 'flex' }}>
                    <Box 
                        sx={{ 
                            my: 1, 
                            mx: 3, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            backgroundColor: 'text.disabled', 
                            border:'1px dashed grey'
                        }}
                        >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Button
                                id="fade-button"
                                aria-controls={openProduct ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openProduct ? 'true' : undefined}
                                onClick={handleClickProduct}
                            >
                            </Button>
                            Products
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorElProduct}
                                open={openProduct}
                                onClose={handleCloseProduct}
                                TransitionComponent={Fade}
                                >
                                <Paper sx={{ 
                                    width: 320, 
                                    maxWidth: '100%', 
                                    display: 'flex', 
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around',
                                    }}>
                                    {products.map((product, index) => (
                                        <MenuItem key={index} onClick={handleClose}>
                                            <NavLink 
                                                style={{ textDecoration: 'none' }}
                                                to={product.path}
                                                >
                                                    {product.name}
                                            </NavLink>
                                        </MenuItem>
                                    ))}
                                </Paper>
                            </Menu>
                        </CardContent>
                    </Box>
                </Card>

                <Card sx={{ display: 'flex' }}>
                    <Box 
                        sx={{ 
                            my: 1, 
                            mx: 3, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            backgroundColor: 'text.disabled', 
                            border: '1px dashed grey'
                        }}
                        >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Button
                                id="fade-button"
                                aria-controls={openArticle ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openArticle ? 'true' : undefined}
                                onClick={handleClickArticle}
                            >
                            </Button>
                            Articles
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorElArticle}
                                open={openArticle}
                                onClose={handleCloseArticle}
                                TransitionComponent={Fade}
                            >
                                <Paper sx={{ 
                                    width: 320, 
                                    maxWidth: '100%', 
                                    display: 'flex', 
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around',
                                    }}>
                                    {articles.map((article, index) => (
                                        <MenuItem key={index} onClick={handleClose}>
                                            <NavLink 
                                                style={{ textDecoration: 'none' }}
                                                to={article.path}
                                                >
                                                    {article.name}
                                            </NavLink>
                                        </MenuItem>
                                    ))}
                                </Paper>
                            </Menu>
                        </CardContent>
                    </Box>
                </Card>
            </Card>
        </Widget>
    )
}

export default Navbar;
