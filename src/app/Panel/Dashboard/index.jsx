import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import { MyTable, Widget } from '../../../components';

import MaterialTable from "material-table";

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

// let columns = [
//     {
//         title: "First Name",
//         field: "first_name",
//         type: "string",
//     },
//     {
//         title: "Last Name",
//         field: "last_name",
//         type: "string",
//     },
//     {
//         title: "User Name",
//         field: "username",
//         type: "string",
//     },
//     {
//         title: "Email",
//         field: "email",
//         type: "string",
//     },
// ];

// let data = [
//     {
//         first_name: "1",
//         last_name: "1",
//         username: "1",
//         email: "1",
//     },
//     {
//         first_name: "2",
//         last_name: "2",
//         username: "2",
//         email: "2",
//     },
//     {
//         first_name: "3",
//         last_name: "3",
//         username: "3",
//         email: "3",
//     }
// ];

const Dashboard = () => {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
    ]);

    const [data, setData] = useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);

    return(
        <Widget>
        {/* <MaterialTable
            title="Multiple Actions Preview"
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
            ]}
            data={[
                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
            ]}        
            actions={[
                {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
                },
                {
                icon: 'delete',
                tooltip: 'Delete User',
                onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
                }
            ]}
            /> */}


            {/* <MyTable /> */}

            <MaterialTable
                title="Editable Preview"
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        setData([...data, newData]);
                        
                        resolve();
                        }, 1000)
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        const dataUpdate = [...data];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                        setData([...dataUpdate]);

                        resolve();
                        }, 1000)
                    }),
                    onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        const dataDelete = [...data];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setData([...dataDelete]);
                        
                        resolve()
                        }, 1000)
                    }),
                }}
                />

            <MyTable            
                title="Editable Preview"
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        setData([...data, newData]);
                        
                        resolve();
                        }, 1000)
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        const dataUpdate = [...data];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                        setData([...dataUpdate]);

                        resolve();
                        }, 1000)
                    }),
                    onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        const dataDelete = [...data];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setData([...dataDelete]);
                        
                        resolve()
                        }, 1000)
                    }),
                }}
                />
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