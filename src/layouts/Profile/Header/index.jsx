import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeIcon from '@mui/icons-material/Home';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Flags } from '../../../components';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

const credits = [
  { 
    id: 1,
    name: 'Profile',
    path: 'profile',
    icon: <AccountCircleIcon color='success' />,
  },
  { 
    id: 2,
    name: 'Setting',
    path: 'setting',
    icon: <SettingsIcon color='secondary' />,
  }, 
  { 
    id: 3,
    name: 'Logout',
    path: 'logout',
    icon: <LogoutIcon color='primary' />,
  },
  { 
    id: 4,
    name: 'Admin Panel',
    path: '/panel/dashboard',
    icon: <AdminPanelSettingsIcon color='dark' />,
  },
];

const Products = [
  { 
    id: 1,
    name: 'Products',
    path: '/products',
    icon: <AccountCircleIcon color='success' />,
  },
  { 
    id: 2,
    name: 'Setting',
    path: 'setting',
    icon: <SettingsIcon color='secondary' />,
  }, 
  { 
    id: 3,
    name: 'Logout',
    path: 'logout',
    icon: <LogoutIcon color='primary' />,
  },
  { 
    id: 4,
    name: 'Admin Panel',
    path: 'panel/dashboard',
    icon: <AdminPanelSettingsIcon color='dark' />,
  },
];

const Articles = [
  { 
    id: 1,
    name: 'Artcicles',
    path: '/articles',
    icon: <AccountCircleIcon color='success' />,
  },
  { 
    id: 2,
    name: 'Setting',
    path: 'setting',
    icon: <SettingsIcon color='secondary' />,
  }, 
  { 
    id: 3,
    name: 'Logout',
    path: 'logout',
    icon: <LogoutIcon color='primary' />,
  },
  { 
    id: 4,
    name: 'Admin Panel',
    path: 'panel/dashboard',
    icon: <AdminPanelSettingsIcon color='dark' />,
  },
];

const pages = [
  { 
    id: 1,
    name: 'About',
    path: '/about',
    icon: <AccountCircleIcon color='dark' />,
  },
  { 
    id: 2,
    name: 'Contact',
    path: '/contact',
    icon: <SettingsIcon color='dark' />,
  }, 
];
const settings = [
  {
    id: 1,
    name: 'Profile',
    path: '/profile',
  },
  {
    id: 2,
    name: 'Logout',
    path: '/logout'
  }
];

const Header = ({ handleDrawerOpen }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
              >
              <MenuIcon />
            </IconButton>
          }
          <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {page.icon}
                    <Link style={{ textDecoration: "none", color: "black" }} to={page.path}>{page.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Typography 
                sx={{ mx: 3, display: 'block' }}
                textAlign="center">
                {page.icon}
                <Link style={{ textDecoration: "none", color: "black" }} to={page.path}>{page.name}</Link>
              </Typography>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={require("../../../assets/img/profile.png")} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                    <NavLink style={{ textDecoration: "none" }} to={setting.path}>{setting.name}</NavLink> 
                </MenuItem>
              ))}
            </Menu>
            <Flags />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
