import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


export const SignUp: React.FC = (): any => {

  let location = useLocation<string>();

  // const dispatch = useDispatch();
  // let history = useHistory();

  // const authUser = useSelector(
  //   (state: any)  => state.UserAuthReducer
  // )

  // const handleLogout = () => {
  //   dispatch(userLogout())
  // }

  const data = localStorage.getItem('token')

  if ( location.pathname !== '/login') {
    return (
      <>
      </>
    )
  } else {
    return (
      <div className="header__login">
        <NavLink to='/sign-up'>
          Sign Up
        </NavLink>
      </div>
    )
  }
};



