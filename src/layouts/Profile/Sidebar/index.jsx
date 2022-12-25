import React, { useState } from 'react';
import Header from "../Header";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from "react-router-dom";

const drawerWidth = 250;
const data = [
    { name: 'Dashboard', path: 'dashboard', icon: <InboxIcon /> }, 
    { name: 'profileEdit', path: 'profile-edit', icon: <MailIcon /> }, 
    { name: 'myFavorites', path: 'my-favorites', icon: <MailIcon /> }, 
];
  
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Sidebar = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return(
        <React.Fragment>
            <Header handleDrawerOpen={handleDrawerOpen} />
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            >

            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />
                <List>
                {data.map((text, index) => (
                    <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{text.icon}</ListItemIcon>
                        <NavLink style={{textDecoration: 'none'}} to={text.path}>{text.name}</NavLink>
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            <Divider />

            </Drawer>
        </Box>
    </React.Fragment>
    )
}

export default Sidebar;