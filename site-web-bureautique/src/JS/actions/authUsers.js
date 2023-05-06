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

import axios from 'axios';

//Signup
export const registerUser = (newUser) => async (dispatch) => {
    dispatch({type: LOADING_AUTH});
    try {
      const response = await axios.post('/user/signup', newUser)
      dispatch({type:SIGNUP_SUCCESS, payload: response.data})
      console.log(response.data)
    } catch (error) {
      console.dir(error)
      dispatch({type:SIGNUP_FAIL, payload:error})
    }
  };
  
  
  //Signin
  export const loginUser = (detailUser) => async(dispatch) => {
    dispatch({type:LOADING_AUTH})
    console.log(detailUser)
    try {
      const response = await axios.post('/user/signin',detailUser)
      dispatch({type:LOGGIN_SUCCESS, payload: response.data});
      console.log(response.data)
    } catch (error) {
      console.dir(error)
      dispatch({type:LOGGIN_FAIL, payload:error})
    }
  };
  
  
  //User auth
  export const currentUser=()=>async dispatch=>{
    dispatch({type:LOADING_AUTH})
    try {
      const opts={
        headers:{
          Authorization:localStorage.getItem('token')
        }
      }
      const response = await axios.get('/user/currentUser',opts)
      dispatch({type:CURRENT_USER, payload:response.data.user})
    } catch (error) {
      console.dir(error)
      dispatch({type:CURRENT_FAIL, payload:error})
    }
  };
  
  //logout
  export const logout=()=>dispatch=>{
    dispatch({type:LOGOUT_USER})
  }