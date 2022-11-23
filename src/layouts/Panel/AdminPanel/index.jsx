import React from "react";
import { 
  Widget,
} from "../../../components";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const AdminPanel = () => {
    return(
        <div>
            <Sidebar />
            <Navbar />
            <Widget>
                <Outlet />
            </Widget>
            <Footer />
        </div>
    )
}

export default AdminPanel;


// import { Routes ,Route } from 'react-router-dom';
// import routes from "../../../routes";
// import Users from "../../../app/Panel/Users";
// import Dashboard from "../../../app/Panel/Dashboard";
{/* {routes.map((route, index) => {
    console.log(route); */}
    {/* <Routes> */}
        {/* <Route exact path="/panel/dashboard" element={<Dashboard />}/> */}
        {/* <Route exact path="/panel/users" element={<Users />}/>
        <Route exact path="/panel/dashboard" element={<Dashboard />}/> */}
        {/* <Route
            path={route.path}
            render={route.element}
        /> */}
    {/* </Routes> */}
{/* })} */}