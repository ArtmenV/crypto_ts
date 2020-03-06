import { createSelector } from "reselect";
import { AppState } from "../../store";

export const selectAllCryptoCoin = createSelector(
	( state: AppState ) => state.CryptoReducer.allCryptoPrice,
	todos => todos.map(item  => {
		
		return {
			...item,
			supply: Math.round(Number(item.supply)).toLocaleString(),
			volumeUsd24Hr: Math.round(Number(item.volumeUsd24Hr)).toLocaleString(),
			priceUsd: ((Number(item.priceUsd) * 10) / 10).toLocaleString(),
			marketCapUsd: Math.round(Number(item.marketCapUsd)).toLocaleString(),
			changePercent24Hr: ((Number(item.changePercent24Hr) * 100) / 100).toFixed(2)
		}
	})
)