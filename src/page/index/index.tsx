import React from "react";
// import { useSelector } from "react-redux";

import { AllCryptoCoinTable} from "../../components/index/all-crypto-coin-table";

// import {AppState} from "../../store";

export const Home = () => {

	// const isLoading = useSelector(
	// 	(state: AppState) => state.CryptoReducer.isLoading
	// )

	// let primary = isLoading ? 'primary' : ''

	// let theme = {};
	//
	// isLoading ? theme = {color: "blue"} : theme = {color: "green"}

	return (
		<div>
			{/*<ThemeProvider theme={theme}>*/}
			{/*	<ButtonSuccess primary={primary}>*/}
			{/*		Click*/}
			{/*	</ButtonSuccess>*/}
			{/*	<HeadTitle>Hello</HeadTitle>*/}
			{/*</ThemeProvider>*/}
			{/*	<Section>*/}
			{/*		<Paragraph>*/}
			{/*			Look at my buttons, they are amazing buttons !*/}
			{/*		</Paragraph>*/}

			{/*	</Section>*/}

			<section className="home">
				{/*{process.env.REACT_APP_URL}*/}
				<AllCryptoCoinTable />
			</section>
		</div>
	);
};


