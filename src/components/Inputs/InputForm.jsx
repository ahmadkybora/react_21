import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';

const InputForm = ({ label, name, style, type, width, ...otherProps }) => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor={name}>
          {label}
        </InputLabel>
        <Input
          id={name}
          // startAdornment={
          //   <InputAdornment position="start">
          //     <AccountCircle />
          //   </InputAdornment>
          // }
        />
      </FormControl>
    </Box>
  );
}

export default InputForm;