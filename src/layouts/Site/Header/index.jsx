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
    name: 'Popular Products',
    path: '/products',
    icon: <AccountCircleIcon color='dark' />,
  },
  { 
    id: 2,
    name: 'Popular Articles',
    path: '/articles',
    icon: <SettingsIcon color='dark' />,
  }, 
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          </Box>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Typography 
                sx={{ mx: 3, display: 'block' }}
                textAlign="center">
                {page.icon}
                <Link style={{ textDecoration: "none", color: "black" }} to={page.path}>{page.name}</Link>
              </Typography>
              // <IconButton
              //   key={page.id}
              //   onClick={handleCloseNavMenu}
              //   sx={{ my: 2, color: 'white', display: 'block' }}
              // >
              //   {page.icon}
              //   <Link style={{ textDecoration: "none", color: "black" }} to={page.path}>{page.name}</Link>
              // </IconButton>
            ))}
          </Box>

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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Flags />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  // const [anchorElArticles, setAnchorElArticles] = React.useState(null);

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleOpenProductsMenu = (event) => {
  //   setAnchorElProducts(event.currentTarget);
  // }

  // const handleOpenArticlesMenu = (event) => {
  //   setAnchorElArticles(event.currentTarget);
  // }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // return (
  //   <AppBar position="static">
  //     <Flags />
  //         {/* <IconButton aria-label="delete" size="small" onClick={handleClick}>
  //           <DeleteIcon fontSize="inherit" />
  //         </IconButton>
  //         <Menu
  //           id="basic-menu"
  //           anchorEl={anchorEl}
  //           open={open}
  //           onClose={handleClose}
  //           MenuListProps={{
  //             'aria-labelledby': 'basic-button',
  //           }}
  //         >
  //           <MenuItem onClick={handleClose}>
  //             <IconButton aria-label="delete" size="small" onClick={handleClick}>
  //               <DeleteIcon fontSize="inherit" />
  //             </IconButton>
  //           </MenuItem>
  //           <MenuItem onClick={handleClose}>
  //             <IconButton aria-label="delete" size="small" onClick={handleClick}>
  //               <DeleteIcon fontSize="inherit" />
  //             </IconButton>
  //           </MenuItem>
  //           <MenuItem onClick={handleClose}>
  //             <IconButton aria-label="delete" size="small" onClick={handleClick}>
  //               <DeleteIcon fontSize="inherit" />
  //             </IconButton>
  //           </MenuItem>
  //         </Menu> */}

  //     <Container maxWidth="xl">
  //       <Toolbar disableGutters>
  //         {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} /> */}
  //         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            
  //           {/* <Box> */}
  //             {/* <Grid 
  //               container 
  //               spacing={4}
  //               direction="row"
  //               alignItems="center"
  //               justifyContent="center"
  //               > */}

  //               {/* <Grid item md={2}> */}
  //                 <IconButton onClick={handleOpenProductsMenu} sx={{ p: 0 }}>
  //                   <Typography variant="body2" color="text.secondary">Products</Typography>
  //                     <InventoryIcon />
  //                 </IconButton>
  //               {/* </Grid> */}

  //               {/* <Grid item md={2}> */}
  //                 <IconButton onClick={handleOpenArticlesMenu} sx={{ p: 0 }}>
  //                   <Typography variant="body2" color="text.secondary">Articles</Typography>
  //                     <InventoryIcon />
  //                 </IconButton>

  //                 <IconButton onClick={handleOpenArticlesMenu} sx={{ p: 0 }}>
  //                   <Typography variant="body2" color="text.secondary">About</Typography>
  //                     <InventoryIcon />
  //                 </IconButton>

  //                 <IconButton onClick={handleOpenArticlesMenu} sx={{ p: 0 }}>
  //                   <Typography variant="body2" color="text.secondary">Home</Typography>
  //                     <InventoryIcon />
  //                 </IconButton>

  //               {/* </Grid> */}

  //               {/* <Grid item md={2}> */}
  //                 {/* <IconButton sx={{ p: 0 }}>
  //                   <Typography variant="body2" color="text.secondary">
  //                     <InventoryIcon />
  //                     <NavLink to="about">About</NavLink>
  //                   </Typography>
  //                 </IconButton> */}
  //               {/* </Grid> */}

  //               {/* <Grid item md={2}> */}
  //                 {/* <IconButton sx={{ p: 0 }}>
  //                   <Typography variant="body2" color="text.secondary">
  //                     <HomeIcon />
  //                     <NavLink to="/">Home</NavLink>
  //                   </Typography>
  //                 </IconButton> */}
  //               {/* </Grid> */}

  //           {/* </Box> */}
  //               {/* <Grid item md={3}> */}
  //                 <Tooltip title="Open settings">
  //                   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
  //                     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  //                   </IconButton>
  //                 </Tooltip>
  //               {/* </Grid> */}

  //             {/* </Grid> */}

  //           <Menu
  //             // PaperProps={{sx: {width: '800px'}}}
  //             sx={{ mt: '45px'}}
  //             id="menu-appbar"
  //             anchorEl={anchorElProducts}
  //             anchorOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             open={Boolean(anchorElProducts)}
  //             onClose={handleOpenProductsMenu}
  //           >
  //             {Products.map((Product) => (
  //               <MenuItem key={Product} onClick={handleOpenProductsMenu}>
  //                 <Typography textAlign="center">
  //                   {Product.icon}
  //                   <NavLink style={{ textDecoration: 'none', color: 'black', padding: "2px" }} to={Product.path}>{Product.name}</NavLink>
  //                 </Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>

  //           <Menu
  //             // PaperProps={{sx: {width: '800px'}}}
  //             sx={{ mt: '45px'}}
  //             id="menu-appbar"
  //             anchorEl={anchorElArticles}
  //             anchorOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             open={Boolean(anchorElArticles)}
  //             onClose={handleOpenArticlesMenu}
  //           >
  //             {Articles.map((Article) => (
  //               <MenuItem key={Article} onClick={handleOpenProductsMenu}>
  //                 <Typography textAlign="center">
  //                   {Article.icon}
  //                   <NavLink style={{ textDecoration: 'none', color: 'black', padding: "2px" }} to={Article.path}>{Article.name}</NavLink>
  //                 </Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>

  //           <Menu
  //             style={{ width: "1000px" }}
  //             sx={{ mt: '45px' }}
  //             id="menu-appbar"
  //             anchorEl={anchorElUser}
  //             anchorOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             open={Boolean(anchorElUser)}
  //             onClose={handleCloseUserMenu}
  //           >
  //             {credits.map((credit) => (
  //               <MenuItem key={credit} onClick={handleCloseUserMenu}>
  //                 <Typography textAlign="center">
  //                   {credit.icon}
  //                   <NavLink style={{ textDecoration: 'none', color: 'black', padding: "2px" }} to={credit.path}>{credit.name}</NavLink>
  //                 </Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>

  //         </Box>
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );
}
export default Header;
