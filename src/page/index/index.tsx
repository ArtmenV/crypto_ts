import React from "react";
import { useSelector } from "react-redux";

import styled from 'styled-components';

import { AllCryptoCoinTable} from "../../components/index/all-crypto-coin-table";


import {AppState} from "../../store";

import {Section, Paragraph, ButtonSuccess} from '../../ui/index';

export const Home = () => {

	const isLoading = useSelector(
		(state: AppState) => state.CryptoReducer.isLoading
	)

	let primary = isLoading ? 'primary' : ''

	return (
		<div>
				<Section>
					<Paragraph>
						Look at my buttons, they are amazing buttons !
					</Paragraph>
					<ButtonSuccess primary={primary}>
						Click
					</ButtonSuccess>
				</Section>

			<section className="home">
				<AllCryptoCoinTable />
			</section>
		</div>
	);
};


