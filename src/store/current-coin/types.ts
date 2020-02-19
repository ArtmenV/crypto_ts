import { Action } from "redux";

export interface ICurrentCoin {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  supply: string,
  maxSupply: string,
  marketCapUsd: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  changePercent24Hr: string,
  vwap24Hr: string
}

export interface ICurrentExchange {
  exchangeId: string,
  baseId: string,
  quoteId: string,
  baseSymbol: string,
  quoteSymbol: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  volumePercent: string
}

export interface ICurrentCoinInfo {
  currentCoin: ICurrentCoin;
  exchangePrice: Array<ICurrentExchange>;
  isLoading: boolean;
  isError: boolean;
}

export enum CurrentCoinInfoActionTypes {
  GET_CURRENT_COIN_START = "@@crypto/GET_COIN + START",
  GET_CURRENT_COIN_SUCCESS = "@@crypto/GET_COIN + SUCCESS",
  GET_CURRENT_COIN_ERROR = "@@crypto/GET_COIN + ERROR"
}

export interface CurrentCoinInfoStartActionTypes extends Action {
  type: CurrentCoinInfoActionTypes.GET_CURRENT_COIN_START;
}

export interface CurrentCoinInfoSuccessActionTypes extends Action {
  type: CurrentCoinInfoActionTypes.GET_CURRENT_COIN_SUCCESS;
  payload: ICurrentCoin;
}

export interface CurrentCoinInfoErrorActionTypes extends Action {
  type: CurrentCoinInfoActionTypes.GET_CURRENT_COIN_ERROR;
  payload: boolean;
}

//===================================
// exchange type

export enum CurrentCoinExchangePriceInfoActionTypes {
  GET_CURRENT_COIN_PRICE_START = "@@crypto/GET_COIN_PRICE + START",
  GET_CURRENT_COIN_PRICE_SUCCESS = "@@crypto/GET_COIN_PRICE + SUCCESS",
  GET_CURRENT_COIN_PRICE_ERROR = "@@crypto/GET_COIN_PRICE + ERROR"
}

export interface CurrentCoinInfoPriceStartActionTypes extends Action {
  type: CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_START;
}

export interface CurrentCoinInfoPriceSuccessActionTypes extends Action {
  type: CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_SUCCESS;
  payload: ICurrentCoin;
}

export interface CurrentCoinInfoPriceErrorActionTypes extends Action {
  type: CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_ERROR;
  payload: boolean;
}

export type ActionsType =
  | CurrentCoinInfoStartActionTypes
  | CurrentCoinInfoSuccessActionTypes
  | CurrentCoinInfoErrorActionTypes

  | CurrentCoinInfoPriceStartActionTypes
  | CurrentCoinInfoPriceSuccessActionTypes
  | CurrentCoinInfoPriceErrorActionTypes

