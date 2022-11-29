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
import { NavLink } from "react-router-dom";
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

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [anchorElArticles, setAnchorElArticles] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenProductsMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  }

  const handleOpenArticlesMenu = (event) => {
    setAnchorElArticles(event.currentTarget);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} /> */}
          <Box>
            
            {/* <Box> */}
              <Grid 
                container 
                spacing={3}
                direction="row"
                alignItems="center"
                justifyContent="center"
                >

                <Grid item md={3}>
                  <IconButton onClick={handleOpenProductsMenu} sx={{ p: 0 }}>
                    <Typography variant="body2" color="text.secondary">Products</Typography>
                      <InventoryIcon />
                  </IconButton>
                </Grid>

                <Grid item md={3}>
                  <IconButton onClick={handleOpenArticlesMenu} sx={{ p: 0 }}>
                    <Typography variant="body2" color="text.secondary">Articles</Typography>
                      <InventoryIcon />
                  </IconButton>
                </Grid>

                <Grid item md={3}>
                  <IconButton sx={{ p: 0 }}>
                    <Typography variant="body2" color="text.secondary">
                      <InventoryIcon />
                      <NavLink to="about">About</NavLink>
                    </Typography>
                  </IconButton>
                </Grid>

                <Grid item md={3}>
                  <IconButton sx={{ p: 0 }}>
                    <Typography variant="body2" color="text.secondary">
                      <HomeIcon />
                      <NavLink to="/">Home</NavLink>
                    </Typography>
                  </IconButton>
                </Grid>

            {/* </Box> */}
                <Grid item md={3}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                </Grid>

              </Grid>

            <Menu
              // PaperProps={{sx: {width: '800px'}}}
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElProducts}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElProducts)}
              onClose={handleOpenProductsMenu}
            >
              {Products.map((Product) => (
                <MenuItem key={Product} onClick={handleOpenProductsMenu}>
                  <Typography textAlign="center">
                    {Product.icon}
                    <NavLink style={{ textDecoration: 'none', color: 'black', padding: "2px" }} to={Product.path}>{Product.name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

            <Menu
              // PaperProps={{sx: {width: '800px'}}}
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElArticles}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElArticles)}
              onClose={handleOpenArticlesMenu}
            >
              {Articles.map((Article) => (
                <MenuItem key={Article} onClick={handleOpenProductsMenu}>
                  <Typography textAlign="center">
                    {Article.icon}
                    <NavLink style={{ textDecoration: 'none', color: 'black', padding: "2px" }} to={Article.path}>{Article.name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

            <Menu
              style={{ width: "1000px" }}
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
              {credits.map((credit) => (
                <MenuItem key={credit} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    {credit.icon}
                    <NavLink style={{ textDecoration: 'none', color: 'black', padding: "2px" }} to={credit.path}>{credit.name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
