import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {  useDispatch } from "react-redux";

import { userLogout } from "../../store/userAuth/action";

import './Login.scss'

export const Login: React.FC = () => {

  let location = useLocation<string>();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout())
  }

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



