import {
  AllCryptoDataActionTypes
} from "./types";

import { Dispatch } from "redux";
import { $apiGetCryptoCoin } from "../../api/api";

export const cryptoAddAction = () => async (
  dispatch: Dispatch
): Promise<void> => {

  dispatch({
    type: AllCryptoDataActionTypes.ADD_DATA_START
  });

  try {
    const cryptoData = await $apiGetCryptoCoin.getCoin();
    dispatch({
      type: AllCryptoDataActionTypes.ADD_DATA_SUCCESS,
      payload: cryptoData.data.data
    });
  } catch {
    dispatch({
      type: AllCryptoDataActionTypes.ADD_DATA_ERROR,
      payload: true
    })
  }
};
