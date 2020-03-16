import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { currentCoin, currentCoinMarket } from "../../store/current-coin/action";
import { CurrentCrypto } from '../../components/current-coin/current-crypto'
import { CoinExchange } from '../../components/current-coin/coin-exchange'
import { useParams } from "react-router-dom";
import { Loader } from "../../ui/loader";

interface RouteParams {
	id: string
}

export const CurrentCoin = () => {
	
	const params = useParams<RouteParams>()
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(currentCoin(params.id))
	}, [dispatch, params.id])
	
	useEffect(() => {
		dispatch(currentCoinMarket(params.id))
	}, [dispatch, params.id])
	
	const isLoading = useSelector(
		(state: any) =>
			state.CurrentCoinInfoReducer.isLoadingCurrentCoin &&
			state.CurrentCoinInfoReducer.isLoadingExchangePrice
	)
	
	if ( isLoading ) {
		return <Loader />
	}
	
	return (
		<section className="current--coin">
			<CurrentCrypto />
			<CoinExchange />
		</section>
	);
};


