import React from "react";
import { NavLink } from "react-router-dom";

export const Profile: React.FC = () => {

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



