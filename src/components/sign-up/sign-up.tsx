import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


export const SignUp: React.FC = (): any => {

  const data = localStorage.getItem('token')

  return (
    <div className="header__login">
      <NavLink to='/sign-up'>
        Sign Up
      </NavLink>
    </div>
  )
};



