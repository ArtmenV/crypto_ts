import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";

import { AllCryptoCoinTable } from "../../components/index/all-crypto-coin-table";
import { cryptoAddAction } from "../../store/getApiData/action";
import { Loader } from "../../ui/loader";
import { AppState } from "../../store";

export const Home = () => {
	const dispatch = useDispatch();
	
	useEffect(() => {
	  dispatch(cryptoAddAction());
	}, [dispatch]);
	
	const isLoading = useSelector(
		(state: AppState) => state.CryptoReducer.isLoading
	)
	
	const override = css`
    margin: 0 auto;
    margin-top: 3rem;
  `;
	
	if ( isLoading ) {
	  // @ts-ignore
		return <Loader/>
	}

	return (
		<>
			<section className="home">
				<AllCryptoCoinTable />
			</section>
		</>
	);
};


