import React from "react";
import { 
  Widget,
  Footer,
} from "../../../components";
import { Route } from "react-router-dom";

import Sidebar from "../Sidebar";
import routes from "../../../routes";

const MainPanel = () => {
    return(
        <div>
            <Sidebar />
                <Widget>
                    {routes.map((route, index) => {
                        <Route
                            path={route.path}
                            component={route.element}
                        />
                    })}
                </Widget>
            <Footer />
        </div>
    )
}

export default MainPanel;