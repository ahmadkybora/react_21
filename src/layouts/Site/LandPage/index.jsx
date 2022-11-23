import React from "react";
import { 
  Widget,
} from "../../../components";

import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const AdminPanel = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Footer />
            {/* <Widget>
                <Outlet />
            </Widget> */}
        </div>
    )
}

export default AdminPanel;
