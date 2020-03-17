import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AllCryptoCoinTable } from "../../components/index/all-crypto-coin-table";
import { cryptoAddAction } from "../../store/all-coin/action";
import { Loader } from "../../ui/loader";
import { AppState } from "../../store";

export const Home: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(cryptoAddAction());
	}, [dispatch]);
	
	const isLoading = useSelector(
		(state: AppState) => state.CryptoReducer.isLoading
	)
	
	if ( isLoading ) return <Loader/>

	return (
		<>
			<section className="home">
				<AllCryptoCoinTable />
			</section>
		</>
	);
};


