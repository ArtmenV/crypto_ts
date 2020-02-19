import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Profile = (): any => {

	if ( localStorage.getItem('token') ) {
		return (
			<div className="header__login">
				<NavLink to='/profile'>
					profile
				</NavLink>
			</div>
		)
	}

	return (
		<></>
	)
};



