import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Widget = ({ children, styleName, title, ...otherProps }) => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent
        className=''>
        {children}
      </CardContent>
    </Card>
  );
}

export default Widget;
