import {
  AllCryptoDataActionTypes
} from "./types";

import { Dispatch } from "redux";
import { instAPI } from "../../api/index";

export const cryptoAddAction = () => async (
  dispatch: Dispatch
): Promise<void> => {

  dispatch({
    type: AllCryptoDataActionTypes.ADD_DATA_START
  });

  try {
    const cryptoData = await instAPI({
      url: `/assets?limit=500`,
      method: "get"
    });
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
