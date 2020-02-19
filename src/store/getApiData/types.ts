import { Action } from "redux";

export interface IAllCryptoPrice {
  changePercent24Hr: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

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

export interface ICryptoData {
  allCryptoPrice: Array<IAllCryptoPrice>;
  isLoading: boolean;
  isError: boolean;
}

//homepage
export enum AllCryptoDataActionTypes {
  ADD_DATA_START = "@@crypto/ADD_DATA + START",
  ADD_DATA_SUCCESS = "@@crypto/ADD_DATA + SUCCESS",
  ADD_DATA_ERROR = "@@crypto/ADD_DATA + ERROR"
}

export interface AllCryptoActionStartTypes extends Action {
  type: AllCryptoDataActionTypes.ADD_DATA_START;
}

export interface AllCryptoSuccessActionTypes extends Action {
  type: AllCryptoDataActionTypes.ADD_DATA_SUCCESS;
  payload: IAllCryptoPrice;
}

export interface AllCryptoErrorActionTypes extends Action {
  type: AllCryptoDataActionTypes.ADD_DATA_ERROR;
  payload: boolean;
}

export type ActionsType =
  | AllCryptoActionStartTypes
  | AllCryptoSuccessActionTypes
  | AllCryptoErrorActionTypes

