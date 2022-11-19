import React from "react";
import { 
  Widget,
  Footer,
} from "../../../components";
import { Routes ,Route } from 'react-router-dom';

import Sidebar from "../Sidebar";
import routes from "../../../routes";
import Users from "../../../app/Panel/Users";
import Dashboard from "../../../app/Panel/Dashboard";
import Navbar from "../Navbar";

const MainPanel = () => {
    return(
        <div>
            <Sidebar />
            <Navbar />
            <Widget>
                {/* {routes.map((route, index) => {
                    console.log(route); */}
                    <Routes>
                        {/* <Route exact path="/panel/dashboard" element={<Dashboard />}/> */}
                        <Route exact path="/panel/users" element={<Users />}/>
                        <Route exact path="/panel/dashboard" element={<Dashboard />}/>
                        {/* <Route
                            path={route.path}
                            render={route.element}
                        /> */}
                    </Routes>
                {/* })} */}
            </Widget>
            <Footer />
        </div>
    )
}

export default MainPanel;