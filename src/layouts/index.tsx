import React from "react";
import {Navbar} from "../components/navigation/Navbar";

export const IndexLayout: React.FC<React.ReactNode> = ({children}) => {

	return (
		<>
			<Navbar/>
			{children}
			<footer>
				<div></div>
			</footer>
		</>
	)
};
