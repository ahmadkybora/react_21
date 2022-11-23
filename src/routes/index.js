import Auth from '../layouts/Auth';

import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const AdminPanel = lazy(() => import("../layouts/Panel/AdminPanel"));

/***** Pages ****/

const Dashboard = lazy(() => import("../app/Panel/Dashboard"));
const Users = lazy(() => import("../app/Panel/Users"));

const Home = lazy(() => import("../app/Site/Home"));

const Login = lazy(() => import("../app/Panel/Dashboard"));
const Register = lazy(() => import("../app/Panel/Dashboard"));
/*****Routes******/

const routes = [
  {
    path: "/panel",
    element: <AdminPanel />,
    children: [
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/users", exact: true, element: <Users /> },
    ],
  },
];

// import Login from "../app/Auth/Login";
// import Register from "../app/Auth/Register";

// import App from "../App";

// import { lazy } from "react";
// export const routes = [
//     { 
//         path: "/", 
//         name: "dashboard",
//         component: "",
//     },
//     { 
//         path: "/article", 
//         name: "article", 
//         component: import("../app/Article")
//     },
//     { 
//         path: "/products", 
//         name: "products", 
//         component: ""
//     },
//     { 
//         path: "/posts", 
//         name: "posts", 
//         component: ""
//     },
// ]

// const Article = () => import("../app/Article");

// const routes = [
//     { path: "/login", exact: true, element: <Login /> },
//     { path: "/register", exact: true, element: <Register /> },
    // {
    //     path: "/",
    //     element: <Auth />,
    //     children: [

    //     ]
    // },
    // { path: "/login", exact: true, element: <Login /> },

    // { path: "/", exact: true, element: <App /> },
    // { path: "/", exact: true, element: <Home /> },
    // { path: "/panel/dashboard", exact: true, element: <Dashboard /> },
    // { path: "/panel/users", exact: true, element: <Users /> },
    // { path: "/article", exact: true, element: <Article /> },
    // { path: "/about", exact: true, element: <About /> },
    // { path: "/alerts", exact: true, element: <Alerts /> },
    // { path: "/badges", exact: true, element: <Badges /> },
    // { path: "/buttons", exact: true, element: <Buttons /> },
    // { path: "/cards", exact: true, element: <Cards /> },
    // { path: "/grid", exact: true, element: <Grid /> },
    // { path: "/table", exact: true, element: <Tables /> },
    // { path: "/forms", exact: true, element: <Forms /> },
    // { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
// ];

export default routes;