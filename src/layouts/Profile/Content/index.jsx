import React from "react";
import { 
    Widget,
  } from "../../../components";
import Footer from "../../Site/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Profile = () => {
    return(
        <>
            <Sidebar />
            <Widget>
                <Outlet />
            </Widget>
            <Footer />
        </>
    );
}

export default Profile;