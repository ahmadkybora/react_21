import http from "./httpService";

import FORM_DATA_HEADER from "./constants";

const GET_ALL_USERS_URL = "panel/users";
const GET_ALL_AND_PAGINATE = "?allAndPaginate=10";

const getAllUsers = () => {
    return http.get(http.baseURL + GET_ALL_USERS_URL + GET_ALL_AND_PAGINATE);
}

export default getAllUsers;
