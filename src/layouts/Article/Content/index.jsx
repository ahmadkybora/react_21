import React from "react";
import { 
  Widget,
} from "../../../components";
import Navbar from "../Navbar";
import Description from "../Description";
import Header from "../../Site/Header";
import Footer from "../../Site/Footer";

import { Outlet } from "react-router-dom";

let credit = 
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        path: "/brands", 
        border: '1px dashed grey',
        image: require("../../../assets/img/banner.jpeg"),
        description: "Amazon is a technology company which is based in USA,the company is multilingual and focuses on artificial intelligence,e-commerce and so on! Amazon cares about customer service,with one click only you may purchase anything you need wherever you need as shipping item is always an option! other than Amazon shopping website ,Amazon also gives other services as Fire tables,Alexa ,Amazon echo and etc. The company started the activity as an online marketplace but now Amazon plays an important in America's industry,it is one of the big five companies in USA!there are lots of options as furniture,toys,games and all many other goods for customers.",
    };

const Content = () => {
    return(
        <>
            <Header />
            <Navbar 
                title={credit.title}
                />
            <Description 
                image={credit.image}
                description={credit.description}
                />
            <Widget>
                <Outlet />
            </Widget>
            <Footer />
        </>
    )
}

export default Content;
