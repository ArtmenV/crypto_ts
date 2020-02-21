import {
  ActionsType,
  CurrentCoinInfoActionTypes,
  CurrentCoinExchangePriceInfoActionTypes,
  ICurrentCoinInfo,
} from "./types";

import produce from "immer"

export const initialState: ICurrentCoinInfo = {
  currentCoin: {
    id: '',
    rank: '',
    symbol: '',
    name: '',
    supply: '',
    maxSupply: '',
    marketCapUsd: '',
    volumeUsd24Hr: '',
    priceUsd: '',
    changePercent24Hr: '',
    vwap24Hr: ''
  },
  exchangePrice: [],
  isLoading: false,
  isError: false,
};

export const CurrentCoinInfoReducer = (
  state: ICurrentCoinInfo = initialState,
  action: ActionsType | any
): ICurrentCoinInfo => {
  return produce(state, draft => {
    switch (action.type) {
      case CurrentCoinInfoActionTypes.GET_CURRENT_COIN_START:
        draft.isLoading = true
        break

      case CurrentCoinInfoActionTypes.GET_CURRENT_COIN_SUCCESS:
        draft.isLoading = false
        draft.currentCoin = action.payload
        break

      case CurrentCoinInfoActionTypes.GET_CURRENT_COIN_ERROR:
        draft.isLoading = true
        break

      case CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_START:
        draft.isLoading = true
        break

      case CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_SUCCESS:
        draft.isLoading = false
        draft.exchangePrice = action.payload
        break

      case CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_ERROR:
        draft.isLoading = false
        draft.isError = action.payload
        break

      default:
        return draft;
    }
  })
};
