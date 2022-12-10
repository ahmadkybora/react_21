import * as actions from '../actions/type';

const initialState = {
  lang:'',
}

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.UPDATE_LANG: {
        return {
            ...state,
            lang: action.payload,
        }
    }
    
    default: return state
  }
};