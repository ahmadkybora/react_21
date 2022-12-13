import * as actions from '../actions/type';

const initialState = {
  lang: '',
  icon: '',
  name: '',
}

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.UPDATE_LANG: {
        return {
            ...state,
            lang: action.payload.value,
            icon: action.payload.icon,
            name: action.payload.name,
        }
    }
    
    default: return state
  }
};