import {
  IUserAuthData,
  UserAuthActionTypes,
  UserLogoutActionTypes,
} from "./types";

import { ThunkAction } from "redux-thunk";
import { Dispatch, Action } from "redux";
import { $apiAuth } from '../../api/api'
import { AppState } from '../index'


type ThunkType = ThunkAction<Promise<void>, AppState, unknown, Action<string>>

export const userAuth = ({username, password}: IUserAuthData): ThunkType => async (
  dispatch: Dispatch
) => {
  const data = {
    username,
    password
  }
  dispatch({
    type: UserAuthActionTypes.USER_LOGIN_START
  });
  try {
    const userData = await $apiAuth.login(data)

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














