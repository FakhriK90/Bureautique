import {
  LOADING_AUTH,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGGIN_SUCCESS,
  LOGGIN_FAIL,
  CURRENT_USER,
  CURRENT_FAIL,
  LOGOUT_USER,
} from "../constantes/authConst";

const initialState = {
    loading : false,
    errors : null,
    users : {},
    isAuth : false
}

export const authUsers = (state = initialState, {type, payload}) =>{
    switch (type) {
        case LOADING_AUTH:
      return { ...state, loading: true };
    case LOGGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, loading: false, isAuth:true, user: payload.user, errors: null };
    case LOGGIN_FAIL:
      return { ...state, errors: payload, loading: false };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, errors: null };
    case SIGNUP_FAIL:
      return { ...state, errors: payload, loading: false }; 
    case CURRENT_USER:
      return { ...state, user: payload, loading: false, isAuth:true, errors: null };
    case CURRENT_FAIL:
      return { ...state, errors: payload, loading: false };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { user: {}, errors: null, loading: false };
    default:
      return state;
    }
}
