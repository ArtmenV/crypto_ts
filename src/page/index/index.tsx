import React, {useEffect} from "react";
import { useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";

import { AllCryptoCoinTable} from "../../components/index/all-crypto-coin-table";


import {AppState} from "../../store";

import {Section, Paragraph, ButtonSuccess, HeadTitle} from '../../ui/index';

export const Home = () => {

	const isLoading = useSelector(
		(state: AppState) => state.CryptoReducer.isLoading
	)

	let primary = isLoading ? 'primary' : ''

	let theme = {};

	isLoading ? theme = {color: "blue"} : theme = {color: "green"}


	return (
		<div>
			<ThemeProvider theme={theme}>
				<ButtonSuccess primary={primary}>
					Click
				</ButtonSuccess>
				<HeadTitle>Hello</HeadTitle>
			</ThemeProvider>
				<Section>
					<Paragraph>
						Look at my buttons, they are amazing buttons !
					</Paragraph>

				</Section>

			<section className="home">
				<AllCryptoCoinTable />
			</section>
		</div>
	);
};


