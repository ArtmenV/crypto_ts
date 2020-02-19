import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userLogout } from "../../store/userAuth/action";

import './Login.scss'

export const Login: React.FC = (): any => {

  let location = useLocation<string>();

  const dispatch = useDispatch();
  let history = useHistory();

  const authUser = useSelector(
    (state: any)  => state.UserAuthReducer
  )

  const handleLogout = () => {
    dispatch(userLogout())
  }

  const data = localStorage.getItem('token')

  if ( location.pathname !== '/login') {
    return (
      <div className="header__login">
        <NavLink to='/' onClick={handleLogout}>
          logout
        </NavLink>
      </div>
    )
  } else {
    return (
      <div className="header__login">
        <NavLink to='/login'>
          Login
        </NavLink>
      </div>
    )
  }
};



