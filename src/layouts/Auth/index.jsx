import React from "react";
import { 
  Widget,
} from "../../components";
import { Routes ,Route } from 'react-router-dom';
import Login from "../../app/Auth/Login";
import Register from "../../app/Auth/Register";

const MainPanel = () => {
    return(
        <div>
            <Widget>
                {/* {routes.map((route, index) => {
                    console.log(route); */}
                    <Routes>
                        {/* <Route exact path="/panel/dashboard" element={<Dashboard />}/> */}
                        {/* <Route exact path="/login" element={<Login />}/> */}
                        <Route exact path="/register" element={<Register />}/>
                        {/* <Route exact path="/panel/dashboard" element={<Dashboard />}/> */}
                        {/* <Route
                            path={route.path}
                            render={route.element}
                        /> */}
                    </Routes>
                {/* })} */}
            </Widget>
        </div>
    )
}

export default MainPanel;