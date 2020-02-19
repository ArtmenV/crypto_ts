import {
  ActionsType,
  CurrentCoinInfoActionTypes,
  CurrentCoinExchangePriceInfoActionTypes,
  ICurrentCoinInfo,
} from "./types";

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
  switch (action.type) {

    case CurrentCoinInfoActionTypes.GET_CURRENT_COIN_START:
      return {
        ...state,
        isLoading: true
      };

    case CurrentCoinInfoActionTypes.GET_CURRENT_COIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentCoin: action.payload
      };

    case CurrentCoinInfoActionTypes.GET_CURRENT_COIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      };

    //for exchange price
    case CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_START:
      return {
        ...state,
        isLoading: true
      };

    case CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        exchangePrice: action.payload
      };

    case CurrentCoinExchangePriceInfoActionTypes.GET_CURRENT_COIN_PRICE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      };

    default:
      return state;
  }
};
