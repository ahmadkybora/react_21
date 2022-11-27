import React from "react";
import { 
  Widget,
} from "../../../components";
import Navbar from "../Navbar";
import ImageContent from "../ImageContent";
import Description from "../Description";

import { Outlet } from "react-router-dom";

const Content = () => {
    return(
        <>
            <ImageContent />
            <Navbar />
            <Widget>
                <Outlet />
            </Widget>
            <Description />
        </>
    )
}

export default Content;
