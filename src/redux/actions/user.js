import axios from "axios";
import {
  LOAD_USER,
  REGISTER_USER,
  FAIL_USER,
  LOGIN_USER,
  CURRENT_USER,
  LOGOUT_USER,
  GET_ALL_USERS,
  GET_USER,
} from "../constants/user";

export const register = (user ) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      let result = await axios.post("https://localhost:8080/api/v1/auth/register", user);
      dispatch({ type: REGISTER_USER, payload: result.data });
      
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };

  export const login = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      let result = await axios.post("https://localhost:8080/api/v1/auth/login", user);
      dispatch({ type: LOGIN_USER, payload: result.data }); 
     
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };