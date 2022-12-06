import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import MaterialTable from "material-table";

import Refresh from "@material-ui/icons/Refresh";
// import {
//     createMuiTheme,
//     MuiThemeProvider,
//     withStyles,
// } from "@material-ui/core/styles";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

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

const MyTable = (columns, data, title, ...otherProps) => {
    // console.log(columns);
    // console.log(columns);
    // columns = columns.columns;
    // data = columns.data;

    // Refresh = forwardRef((props, ref) => <Refresh {...props} ref={ref} />);
    // const columnTitles = columns.map((columnDef) => columnDef.title);
    // const Data = data.map((rowData) => columns.map((columnDef) => rowData[columnDef.field]));

    // console.log(Data);
    return(
        // <MuiThemeProvider theme={getTheme}>
            // <MaterialTable
            //     title="Simple Action Preview"
            //     columns={[
            //         { title: 'Name', field: 'name' },
            //         { title: 'Surname', field: 'surname' },
            //         { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            //         {
            //             title: 'Birth Place',
            //             field: 'birthCity',
            //             lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            //         },
            //     ]}
            //     data={[
            //         { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            //         { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
            //     ]}        
                // actions={[
                // {
                //     icon: 'save',
                //     tooltip: 'Save User',
                //     // onClick: (event, rowData) => alert("You saved " + rowData.name)
                // }
                // ]}
                // />
            <MaterialTable
                columns={columns.columns}
                data={columns.data}
                icons={tableIcons}
                // actions={[
                //     {
                //         icon: () => <Edit />,
                //         tooltip: 'Save User',
                //         onClick: (event, rowData) => alert("You saved " + rowData.name)
                //     },
                //     {
                //         icon: () => <DeleteOutline />,
                //         tooltip: 'Save User',
                //         onClick: (event, rowData) => alert("You saved " + rowData.name)
                //     }
                //   ]}
                title={columns.title}
                // {...otherProps}
                />
        // </MuiThemeProvider>
    )
}

export default MyTable;
