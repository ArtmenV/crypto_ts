import {
  CurrentCoinInfoActionTypes,
  CurrentCoinExchangePriceInfoActionTypes
} from "./types";

import { Dispatch } from "redux";
import { instAPI } from "../../api/index";

export const currentCoin = (data: string) => async (
  dispatch: Dispatch
): Promise<void> => {

  dispatch({
    type: CurrentCoinInfoActionTypes.GET_CURRENT_COIN_START
  });

  try {
    const coin = await instAPI({
      url: `/assets/${data}`,
      method: "get"
    });
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
    const markets = await instAPI({
      url: `/assets/${data}/markets`,
      method: "get"
    })

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
