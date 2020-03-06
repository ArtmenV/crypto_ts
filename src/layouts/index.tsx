import React from "react";

import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer"

import './index.scss'

export const IndexLayout: React.FC<React.ReactNode> = ({children}) => {

	return (
		<>
			<Navbar/>
			<main className="layout--container">
				{children}
			</main>
			<Footer />
		</>
	)
};
