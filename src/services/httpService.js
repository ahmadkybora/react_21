import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_URL}api/`;
const TOKEN = localStorage.getItem("token");
axios.defaults.baseURL = BASE_URL;

if (TOKEN) {
    axios.defaults.headers.lang = localStorage.getItem("lang") || "en";
    axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
    axios.defaults.headers.common.Accept = "application/json";
}

export default {
    baseURL: axios.defaults.baseURL,
    delete: axios.delete,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
};
