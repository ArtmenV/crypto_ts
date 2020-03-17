import React from "react";
import { useSelector } from "react-redux";

import { AppState } from '../../store/index'

import './current-crypto.scss'

export const CurrentCrypto: React.FC = (): JSX.Element => {

  const data = useSelector(
    (state: AppState) => state.CurrentCoinInfoReducer.currentCoin
  )

  return (
    <div className="current--coin">
      <div>
        <h3 className="current--coin__title">{data.name || ''}
          <small>
          &nbsp; ({data.symbol}):
          </small>
          <div>
            &nbsp; { Number(data.priceUsd).toFixed(2) }$
            &nbsp; Change price 24h: { Number(data.changePercent24Hr).toFixed(2) }%
          </div>
        </h3>
      </div>
    </div>
  )
}
