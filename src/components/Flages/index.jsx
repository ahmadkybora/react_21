import { IconButton, Menu } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { updateLang } from "../../../src/store/actions/settingAction";
import React, { useEffect, useRef } from "react";
import languageData from "../../../src/components/Flages/data";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";

const Flags = ({
    style, divStyle, name, type, ...otherProps
}) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);    
    };
    const changeLanguage = (payload) => {
      localStorage.setItem("lang", payload);
      dispatch(updateLang(localStorage.getItem("lang")));
    }
    // const frRef = useRef("FR");
    // const enRef = useRef("EN");
    // const deRef = useRef("DE");
    return(
        <>
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
              {languageData.map((lang) => (
                <MenuItem 
                  onClick={() => {
                    handleClose;
                    changeLanguage(lang.value)
                  }}>
                  <IconButton 
                    aria-label="delete" 
                    size="small" 
                    >
                    {lang.icon}
                  </IconButton>
                </MenuItem>
              ))}
          </Menu>

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
                {/* <MenuItem onClick={handleClose}>
                <IconButton aria-label="delete" size="small" onClick={handleClick}>
                    EN
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <IconButton aria-label="delete" size="small" onClick={handleClick}>
                    DE
                    <DeleteIcon fontSize="inherit" />
                </IconButton> */}
                {/* </MenuItem> */}

        </>
    )
};

export default Flags;