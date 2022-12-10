import { success, error } from '../../utils/exceptionHandler';
import * as actions from './type';

export const updateLang = (payload) => {
    return {
      type: actions.UPDATE_LANG,
      payload
    };
};