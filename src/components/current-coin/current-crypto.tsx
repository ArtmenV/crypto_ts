import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useRouteMatch } from "react-router-dom";

import './current-crypto.scss'


export const CurrentCrypto: React.FC= () => {

  const params:any = useParams()
  const location = useLocation()
  const match = useRouteMatch()
  
  const dispatch = useDispatch()

  const data = useSelector(
    (state: any) => state.CurrentCoinInfoReducer.currentCoin.data
  )

  if ( !data ) {
    return <></>
  }

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
