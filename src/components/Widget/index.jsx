import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Widget = ({ children, styleName, label, title, ...otherProps }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <Typography 
        sx={{ fontSize: 25 }} 
        color="text.black" 
        gutterBottom
      >
        {label}
      </Typography>
      <CardContent
        className=''>
        {children}
      </CardContent>
    </Card>
  );
}

export default Widget;
