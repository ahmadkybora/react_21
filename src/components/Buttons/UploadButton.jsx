import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

function UploadButton({ title, icon, ...otherProps }) {
  const { 
    variantIcn, 
    colorIcn, 
    componentIcn,
  } = otherProps;
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button 
        {...otherProps} 
        >
        {title}
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton 
        color={colorIcn} 
        variant={variantIcn} 
        component={componentIcn}
        aria-label="upload picture"
        >
        <input hidden accept="image/*" type="file" />
        {icon}
      </IconButton>
    </Stack>
  );
}

export default UploadButton;
