import React from "react";
import {
	Route,
	Redirect,
	useLocation
} from "react-router-dom";

// @ts-ignore
export const AuthRoute = ({ children, ...rest }) => {

	const location = useLocation()

	const authUser = localStorage.getItem('token')

	return (
		<Route
			{...rest}
			render={({ location }) =>
				authUser ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}