import Article from "../app/Article";

export const routes = [
    { 
        path: "/", 
        name: "dashboard",
        component: "",
    },
    { 
        path: "/article", 
        name: "article", 
        component: import("../app/Article")
    },
    { 
        path: "/products", 
        name: "products", 
        component: ""
    },
    { 
        path: "/posts", 
        name: "posts", 
        component: ""
    },
]