import { createSelector } from "reselect";
import { AppState } from "../../store";

export const selectAllCryptoCoin = createSelector(
	( state: AppState ) => state.CryptoReducer.allCryptoPrice,
	todos => todos
)