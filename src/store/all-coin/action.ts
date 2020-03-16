import {
  AllCryptoDataActionTypes
} from "./types";

import { $apiGetCryptoCoin } from "../../api/api";
import { ThunkAction } from "redux-thunk";
import { Dispatch, Action } from "redux";
import { AppState } from '../index'

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, Action<string>>

export const cryptoAddAction = (): ThunkType => async (
  dispatch: Dispatch
) => {

  dispatch({
    type: AllCryptoDataActionTypes.ADD_DATA_START
  });

  const config = {
    params: {
      limit: 500
    }
  }
  try {
    const cryptoData = await $apiGetCryptoCoin.getCoin(config);
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
