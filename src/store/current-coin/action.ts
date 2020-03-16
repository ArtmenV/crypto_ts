import {
  CurrentCoinInfoActionTypes,
  CurrentCoinExchangePriceInfoActionTypes
} from "./types";

import { Dispatch, Action } from "redux";
import { AppState } from '../index'
import { $apiGetCryptoCoin } from "../../api/api";
import { ThunkAction } from "redux-thunk";

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, Action<string>>

export const currentCoin = (data: string): ThunkType => async (
  dispatch: Dispatch
) => {

  dispatch({
    type: CurrentCoinInfoActionTypes.GET_CURRENT_COIN_START
  });
  
  const config = `/${data}`
  try {
    const coin = await $apiGetCryptoCoin.getCurrentCoin(config);

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

export const currentCoinMarket = (data: string): ThunkType => async (
  dispatch: Dispatch
) => {

  dispatch({
    type: CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_START
  });

  const config = `/${data}/markets`
  // debugger
  try {
    const markets = await  $apiGetCryptoCoin.getCurrentCoin(config)

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
