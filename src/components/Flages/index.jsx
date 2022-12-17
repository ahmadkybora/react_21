import { IconButton, Menu } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { updateLang } from "../../../src/store/actions/settingAction";
import React, { useEffect, useRef } from "react";
import languageData from "../../../src/components/Flages/data";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from 'react-redux';

const Flags = ({
  style, divStyle, name, type, ...otherProps
  }) => {
  useEffect(() => {
    getIcon();
  });
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [icon, setIcon] = useState(useSelector(state => state.settingReducer.icon));
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);    
  };
  const getIcon = () => {
    const defaultIcon = "us";
    const icon = localStorage.getItem('icon')
      ? setIcon(localStorage.getItem('icon'))
      : localStorage.setItem('icon', defaultIcon);
        setIcon(localStorage.getItem('icon'));

    return icon;
  }
  const changeLanguage = (payload) => {
    // const lang = localStorage.getItem("lang");
    setIcon(payload.icon);
    let setCredits = Object.assign(payload, { lang: localStorage.getItem("lang") });

    // const { icon, name, value } = payload.assign(lang, localStorage.getItem("lang"));
    // setIcon(icon);
    // console.log(p);
    localStorage.setItem("lang", setCredits.value);
    localStorage.setItem("icon", setCredits.icon);
    dispatch(updateLang(setCredits));
    handleClose();
  }
  // const frRef = useRef("FR");
  // const enRef = useRef("EN");
  // const deRef = useRef("DE");
  return(
      <>
        <IconButton aria-label="delete" size="small" onClick={handleClick}>
          <span className={`fi fi-${icon}`}></span>
            {/* <DeleteIcon fontSize="inherit" /> */}
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
                  changeLanguage(lang)
                }}>
                <IconButton 
                  aria-label="delete" 
                  size="small" 
                  >
                  <span className={`fi fi-${lang.icon}`}></span>
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