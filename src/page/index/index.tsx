import React, {useEffect} from "react";
// import { useSelector } from "react-redux";

import { AllCryptoCoinTable} from "../../components/index/all-crypto-coin-table";
import {store} from "../../store";

// import {AppState} from "../../store";

export const Home = () => {

	useEffect(() => {
		// async function fetchMyAPI() {
		// 	try {
		// 		const response = await $api.login({})
		// 		console.log(response);
		// 	} catch (err) {
		// 		console.log(err);
		// 	} finally {
		// 		console.log('err');
		// 	}
		// }
		//
		// fetchMyAPI();
		console.log('store', store.getState())
	}, [])

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


