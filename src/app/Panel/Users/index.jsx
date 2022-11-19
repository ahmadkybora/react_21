import React, { useEffect, useState } from "react";
import { ConfirmForm, DataTable, Widget } from "../../../components";
import { connect, useDispatch, useSelector } from 'react-redux'
import { getUsers } from "../../../store/actions/userAction";

// function createData(id, first_name, last_name, username, email) {
//     return {
//       id,
//       first_name,
//       last_name,
//       username,
//       email,
//     };
// }
  
// const rows = [
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Donut', 452, 25.0, 51, 4.9),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Honeycomb', 408, 3.2, 87, 6.5),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Jelly Bean', 375, 0.0, 94, 0.0),
//     createData('KitKat', 518, 26.0, 65, 7.0),
//     createData('Lollipop', 392, 0.2, 98, 0.0),
//     createData('Marshmallow', 318, 0, 81, 2.0),
//     createData('Nougat', 360, 19.0, 9, 37.0),
//     createData('Oreo', 437, 18.0, 63, 4.0),
// ];

const headCells = [
    {
      id: 'first_name',
      numeric: false,
      disablePadding: true,
      label: 'First Name',
    },
    {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Last Name',
    },
    {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Username',
    },
    {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'email',
    },
];

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userReducer.users.data);
  useEffect(() => {
    dispatch(getUsers());
  }, [])
  const [display, setDisplay] = useState(false);
  const setDisplayForm = (val) => {
    setDisplay(val);
  };
  return(
      <Widget>
          {display &&
            <ConfirmForm 
              labelTitle="title"
              placeholderTitle="r"
              minRowsTitle="1"
              maxRowsTitle="1"
              labelDescription="Description"
              placeholderDescription="r"
              minRowsDescription="8"
              maxRowsDescription="8"
              submitTitle="Confirm"
              />
          }
          <DataTable 
            setDisplayForm={setDisplayForm}
            rows={users && users}
            headCells={headCells}
            title="Users"
            />
      </Widget>
  );
}

export default Users;