import { Action } from "redux";

export interface IUserAuthData {
  id: number | null,
  username: string,
  password: string,
  token: string,
  refresh_token: string,
}

export interface IUserData   {
  userAuthData: IUserAuthData,
  isLoading: boolean,
  isError: boolean
}

export enum UserAuthActionTypes {
  USER_LOGIN_START = "@@userAuth/USER_DATA + START",
  USER_LOGIN_SUCCESS = "@@userAuth/USER_DATA + SUCCESS",
  USER_LOGIN_ERROR = "@@userAuth/USER_DATA + ERROR"
}

export enum UserLogoutActionTypes {
  LOGOUT_SUCCESS =  "@@userLOGOUT/USER_LOGOUT + SUCCESS",
  // LOGOUT_START = "@@userAuth/USER_LOGOUT + SUCCESS",
  // LOGOUT_ERROR = "@@userAuth/USER_LOGOUT + ERROR"
}

export interface LogoutSuccessActionTypes extends Action {
  type: UserLogoutActionTypes.LOGOUT_SUCCESS;
}

export interface DataActionTypes extends Action {
  type: UserAuthActionTypes.USER_LOGIN_START;
}

export interface DataSuccessActionTypes extends Action {
  type: UserAuthActionTypes.USER_LOGIN_SUCCESS;
  payload: IUserData;
}

export interface DataErrorActionTypes extends Action {
  type: UserAuthActionTypes.USER_LOGIN_ERROR;
  payload: boolean;
}

export type ActionsType =
  | DataActionTypes
  | DataSuccessActionTypes
  | DataErrorActionTypes
  | LogoutSuccessActionTypes
;
