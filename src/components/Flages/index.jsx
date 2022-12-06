import { IconButton, Menu } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';

import React from "react";

const Flags = ({
    style, divStyle, name, type, ...otherProps
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);    
    };

    return(
        <>

        {/* <br />
        <br />
        <div>
          <button onClick={() => {  
            setLocale(LOCALES.ENGLISH);
            localStorage.setItem('lang', locale)
          }}>en</button>
          <button onClick={() => {
            setLocale(LOCALES.GERMAN);
            localStorage.setItem('lang', locale)
          }}>de</button>
          <button onClick={() => {
            setLocale(LOCALES.FRENCH);
            localStorage.setItem('lang', locale)
          }}>fr</button>
        </div>
        <br />
        <br /> */}
            <IconButton aria-label="delete" size="small" onClick={handleClick}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                <IconButton aria-label="delete" size="small" onClick={handleClick}>
                    FR
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <IconButton aria-label="delete" size="small" onClick={handleClick}>
                    EN
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <IconButton aria-label="delete" size="small" onClick={handleClick}>
                    DE
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                </MenuItem>
            </Menu>
        </>
    )
};

export default Flags;