import getAllUsers from "../../services/userService";
import { success, error } from '../../utils/exceptionHandler';
import * as actions from './type';

export const getUsers = () => {
    return dispatch => {
      getAllUsers()
        .then(res => {
          dispatch({ 
            type:actions.GET_USERS, 
            payload:res.data.data 
          });
        })
        .catch(() => error());
    };
};

export const createUsers = () => {
    return {
      type: actions.CREATE_USERS,
    };
};

export const updateUsers = (payload) => {
    return {
      type: actions.UPDATE_USERS,
      payload
    };
};