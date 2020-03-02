import React from "react";
import {
	Route,
	Redirect,
	RouteComponentProps
} from "react-router-dom";

type ChildrenType = {
	children?: React.ReactNode
	path: string
	exact: boolean
}
export const AuthRoute: React.FC<ChildrenType> = ({
	                                                  children,
	                                                  exact = true,
	                                                  path,
}) => {

	const authUser = localStorage.getItem('token')

	return (
		<Route
			exact={exact}
			path={path}
			render={( props: RouteComponentProps) =>
				authUser ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				)
			}
		/>
	);
}