import React from "react";
import { NavLink } from "react-router-dom";

import { Profile } from "../profile/profile";
import { Login } from "../login/Login";
import { Sidebar } from "./sidebar";

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
          <Login/>
        </div>
      </nav>
    </header>
  );
};
