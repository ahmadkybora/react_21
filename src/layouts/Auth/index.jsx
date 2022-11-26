import React from "react";
import { 
  Widget,
} from "../../components";

import { Outlet } from "react-router-dom";

const Auth = () => {
    return(
        <Widget>
            <Outlet />
        </Widget>
    )
}

export default Auth;