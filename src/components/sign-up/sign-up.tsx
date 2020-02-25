import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


export const SignUp: React.FC = (): any => {

  let location = useLocation<string>();

  const data = localStorage.getItem('token')

  if ( location.pathname !== '/login'
      && data
    && location.pathname !== '/sign-up'
  ) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div className="header__login">
        <NavLink to='/sign-up'>
          sign up
        </NavLink>
      </div>
    )
  }
};



