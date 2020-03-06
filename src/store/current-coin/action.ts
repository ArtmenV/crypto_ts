import {
  CurrentCoinInfoActionTypes,
  CurrentCoinExchangePriceInfoActionTypes
} from "./types";

import { Dispatch } from "redux";
import { $apiGetCryptoCoin } from "../../api/api";

export const currentCoin = (data: string) => async (
  dispatch: Dispatch
): Promise<void> => {

  dispatch({
    type: CurrentCoinInfoActionTypes.GET_CURRENT_COIN_START
  });

  try {
    debugger
    const coin = await $apiGetCryptoCoin.getCoin(`/assets/${data}`);

    dispatch({
      type: CurrentCoinInfoActionTypes.GET_CURRENT_COIN_SUCCESS,
      payload: coin.data
    });
  } catch {
    dispatch({
      type: CurrentCoinInfoActionTypes.GET_CURRENT_COIN_ERROR,
      payload: true
    });
  }
};

export const currentCoinMarket = (data: string) => async (
  dispatch: Dispatch
): Promise<void> => {

  dispatch({
    type: CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_START
  });

  try {
    const markets = await  $apiGetCryptoCoin.getCoin(`/assets/${data}/markets`)

    dispatch({
      type: CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_SUCCESS,
      payload: markets.data.data
    });

  } catch {
    dispatch({
      type: CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_ERROR,
      payload: true
    });
  }
};
