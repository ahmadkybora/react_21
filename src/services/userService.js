import http from "./httpService";

import FORM_DATA_HEADER from "./constants";

const GET_ALL_USERS_URL = "panel/users";

const getAllUsers = () => {
    return http.get(http.baseURL + GET_ALL_USERS_URL);
}

export default getAllUsers;
