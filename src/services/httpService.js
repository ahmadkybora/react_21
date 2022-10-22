import {
    APPLICATION_JSON,
    BASE_URL,
    BEARER,
    CONTENT_TYPE,
    MULTIPART_FORMDATA,
    REFERER,
    REFERER_POLICY,
    SOWCO,
    TOKEN,
} from "./constants";

const axios = require("axios").default;

axios.defaults.baseURL = BASE_URL;

if (TOKEN) {
    axios.defaults.headers.lang = localStorage.getItem("lang") || "en";
    axios.defaults.headers.common.Authorization = BEARER + TOKEN;
    axios.defaults.headers.common.Accept = APPLICATION_JSON;
    axios.defaults.headers.common[CONTENT_TYPE] = MULTIPART_FORMDATA;
    axios.defaults.headers.common.Referer = REFERER;
    axios.defaults.headers.common[REFERER_POLICY] = SOWCO;
}

export default {
    baseURL: axios.defaults.baseURL,
    delete: axios.delete,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
};
