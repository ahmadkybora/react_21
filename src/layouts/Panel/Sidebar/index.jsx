import React, { useState } from 'react';
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
import Header from "../Header";
import { useLocation, NavLink } from "react-router-dom";

const drawerWidth = 250;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   }),
// );

const data = [
  { name: 'Dashboard', path: 'dashboard', icon: <InboxIcon /> }, 
  { name: 'Users', path: 'users', icon: <MailIcon /> }, 
  { name: 'Brands', path: 'brands', icon: <MailIcon /> }, 
  { name: 'Categories', path: 'categories', icon: <MailIcon /> }, 
  { name: 'Products', path: 'products', icon: <MailIcon /> }, 
  { name: 'Articles', path: 'articles', icon: <MailIcon /> }, 
  { name: 'Orders', path: 'orders', icon: <MailIcon /> }, 
  { name: 'Transactions', path: 'transactions', icon: <MailIcon /> }, 
  { name: 'Settings', path: 'settings', icon: <MailIcon /> }, 
  { name: 'Logout', path: 'logout', icon: <MailIcon /> }, 
];

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const Sidebar = () => {
  const location = useLocation()
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Header handleDrawerOpen={handleDrawerOpen} />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* <Main open={open}>
          <DrawerHeader />

        </Main> */}
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
  );
}

export default Sidebar;
