import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CurrentCrypto } from '../../components/current-coin/current-crypto'
import { CoinExchange } from '../../components/current-coin/coin-exchange'
import { Loader } from "../../ui/loader";
import { currentCoin, currentCoinMarket } from "../../store/current-coin/action";
import { useParams } from "react-router-dom";


export const CurrentCoin = () => {
	
	const params:any = useParams()
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(currentCoin(params.id))
	}, [dispatch, params.id])
	
	useEffect(() => {
		dispatch(currentCoinMarket(params.id))
	}, [dispatch, params.id])
	
	// const exchangePrice = useSelector(
	// 	(state: any) => state.CurrentCoinInfoReducer.exchangePrice
	// )
	//
	// const dataCoin = useSelector(
	// 	(state: any) => state.CurrentCoinInfoReducer.currentCoin.data
	// )
	//
	const isLoading = useSelector(
		(state: any) =>
			state.CurrentCoinInfoReducer.isLoadingCurrentCoin &&
			state.CurrentCoinInfoReducer.isLoadingExchangePrice
	)
	
	if ( isLoading ) {
		return <Loader />
	}
	
	// console.log('loading', exchangePrice)
	
	return (
		<section className="current--coin">
			<CurrentCrypto />
			<CoinExchange />
		</section>
	);
};


