import {
  UserAuthActionTypes,
  UserLogoutActionTypes,
  ActionsType,
  IUserData,
} from "./types";

const userData: IUserData = {
  userAuthData: {
    id: null,
    username: '',
    password: '',
    token: '',
    refresh_token: ''
  },
  isError: false,
  isLoading: false
}

export const UserAuthReducer = (
  state: IUserData = userData,
  action: ActionsType | any
): IUserData => {
  switch (action.type) {
    
    case UserAuthActionTypes.USER_LOGIN_START:
      return { ...state };

    case UserAuthActionTypes.USER_LOGIN_SUCCESS:
      return { ...state,
        userAuthData: action.payload
      };

    case UserAuthActionTypes.USER_LOGIN_ERROR:
      return { ...state,
        isError: action.payload
      };

    case UserLogoutActionTypes.LOGOUT_SUCCESS:
      return {
        userAuthData: {
          id: null,
          username: '',
          password: '',
          token: '',
          refresh_token: ''
        },
        isError: false,
        isLoading: false
      }

    default:
      return state;
  }
};
