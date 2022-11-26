import React from "react";
import { 
  Widget,
} from "../../../components";

import Header from "../Header";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Brand from "../Brand";
import ArticleCategory from "../ArticleCategory";
import Article from "../Article";
import ProductCategory from "../ProductCategory";
import Product from "../Product";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const AdminPanel = () => {
    return(
        <div>
            <Header />
            <Navbar />
            <Banner />
            <Brand />
            <ArticleCategory />
            <Article />
            <ProductCategory />
            <Product />
            <Footer />
            <Widget>
                <Outlet />
            </Widget>
        </div>
    )
}

export default AdminPanel;
