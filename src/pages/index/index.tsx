import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AllCryptoCoinTable } from "../../components/index/all-crypto-coin-table";
import { cryptoAddAction } from "../../store/all-coin/action";
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


