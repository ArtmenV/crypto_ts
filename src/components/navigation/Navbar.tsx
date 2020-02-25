import React from "react";
import { NavLink } from "react-router-dom";

import { SignUpFinalForm } from "../sign-up/sign-up-final-form";
import { SignUpFinalFormik } from "../sign-up/sign-up-formik";
import { Profile } from "../profile/profile";
import { Login } from "../login/Login";
import { Sidebar } from "./sidebar";
import { SignUp } from '../sign-up/sign-up'

import './Navbar.scss'

export const Navbar = () => {
  return (
    <header>
      <nav className="header--nav">
        <div className="sidebar">
          <Sidebar />
        </div>
        <NavLink className="text-light" to="/">
          <h5 className="logo"> CoinMarketCap</h5>
        </NavLink>
        <div className="logo--container">
          <Profile />
          {/*<SignUpFinalFormik />*/}
          {/*<SignUpFinalForm />*/}
          <SignUp />
          <Login/>
        </div>
      </nav>
    </header>
  );
};
