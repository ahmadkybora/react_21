import Dashboard from "../app/Panel/Dashboard";
import Users from "../app/Panel/Users";

import Home from "../app/Site/Home";
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

const routes = [
    // { path: "/login", exact: true, element: <Login /> },

    // { path: "/", exact: true, element: <App /> },
    { path: "/", exact: true, element: <Home /> },
    { path: "/panel/dashboard", exact: true, element: <Dashboard /> },
    { path: "/panel/users", exact: true, element: <Users /> },
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
];

export default routes;