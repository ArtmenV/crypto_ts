import {
  ActionsType,
  AllCryptoDataActionTypes,
  ICryptoData,
} from "./types";

export const initialState: ICryptoData = {
  allCryptoPrice: [],
  isLoading: false,
  isError: false,
};

export const CryptoReducer = (
  state: ICryptoData = initialState,
  action: ActionsType | any
): ICryptoData => {
  switch (action.type) {

    case AllCryptoDataActionTypes.ADD_DATA_START:
      return {
        ...state,
        isLoading: true
      };

    case AllCryptoDataActionTypes.ADD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCryptoPrice: action.payload
      };

    case AllCryptoDataActionTypes.ADD_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      };

    default:
      return state;
  }
};
