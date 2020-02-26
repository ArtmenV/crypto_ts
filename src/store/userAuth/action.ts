import {
  IUserAuthData,
  UserAuthActionTypes,
  UserLogoutActionTypes,
} from "./types";

import { Dispatch } from "redux";
import { $api } from '../../api/api'
// import axios from "axios";

export const userAuth = ({username, password}: IUserAuthData) => async (
  dispatch: Dispatch
): Promise<void> => {
  const data = {
    username,
    password
  }
  dispatch({
    type: UserAuthActionTypes.USER_LOGIN_START
  });
  try {
    const userData = await $api.login(data)

    localStorage.setItem('user', userData.data.username)
    localStorage.setItem('token', userData.data.token)
    localStorage.setItem('refresh_token', userData.data.refresh_token)

    dispatch({
      type: UserAuthActionTypes.USER_LOGIN_SUCCESS,
      payload: userData.data
    });
  } catch {
    dispatch({
      type: UserAuthActionTypes.USER_LOGIN_ERROR,
      payload: true
    });
  }
}

export const userLogout = () => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({
    type: UserLogoutActionTypes.LOGOUT_SUCCESS
  });

    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
};


