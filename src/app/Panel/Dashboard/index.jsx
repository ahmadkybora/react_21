import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import { Widget } from '../../../components';

let credits = [
    {
        name: "Users online1", 
        icon: <GroupIcon color="primary" />, 
        value: "1", 
        backgroundColor: "primary.dark"
    },
    {
        name: "Users online2", 
        icon: <GroupIcon color="secondary" />, 
        value: "1", 
        backgroundColor: "primary.main"
    },
    {
        name: "Users online3", 
        icon: <GroupIcon color="success" />, 
        value: "1" ,
        backgroundColor: "secondary.main"
    },
    {
        name: "Users online4", 
        icon: <GroupIcon color="action" />, 
        value: "1",
        backgroundColor: "secondary.main" 
    },
    {
        name: "Users online5", 
        icon: <GroupIcon color="disabled" />, 
        value: "1",
        backgroundColor: "warning.main"
    },
    {
        name: "Users online6", 
        icon: <GroupIcon color="disabled" />, 
        value: "1",
        backgroundColor: "warning.main"
    },
];

const Dashboard = () => {
    return(
        <Widget>
            <Card sx={{ display: 'flex' }}>
                {credits.map((credit, index) => (
                    <Card sx={{ display: 'flex' }}>
                        <Box key={index} sx={{ m: 1, display: 'flex', flexDirection: 'column', backgroundColor: credit.backgroundColor }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {credit.name}
                                    {credit.icon}
                                </Typography>
                                <Typography component="div" variant="h5">
                                    {credit.value}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </Card>
            <Card sx={{ m: 2, display: 'flex' }}>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                        It's a best practice to import your global css files in 
                        your index.js file because then they wouldn't only 
                        get loaded when certain component is mounted.
                        </CardContent>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                        It's a best practice to import your global css files in 
                        your index.js file because then they wouldn't only 
                        get loaded when certain component is mounted.
                        </CardContent>
                    </Box>
                </Card>
            </Card>
        </Widget>
    )
}

export default Dashboard;