import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Widget } from '../../../components';

const Navbar = () => {
    return(
        <Widget>
            <Card sx={{ display: 'flex', backgroundColor: "red" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Navbar
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Widget>
    );
}

export default Navbar;
