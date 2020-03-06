import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useRouteMatch } from "react-router-dom";

import { BounceLoader } from "react-spinners";
import { css}  from "@emotion/core";

import { currentCoin } from "../../store/current-coin/action";

import './current-crypto.scss'

export const CurrentCrypto = () => {

  const params:any = useParams()
  const location = useLocation()
  const match = useRouteMatch()

  console.log('params', params)
  console.log('location', location)
  console.log('match', match)

  // console.log('params', params)
  // console.log('location', location)
  // console.log('match', match)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentCoin(params.id))
  }, [dispatch, params.id])

  const data = useSelector(
    (state: any) => state.CurrentCoinInfoReducer.currentCoin.data
  )

  const isLoading = useSelector(
    (state: any) => state.CurrentCoinInfoReducer.isLoading
  )

  const override = css`
    margin: 0 auto;
    margin-top: 3rem;
  `;

  if ( !data ) {
    return (
      <BounceLoader
        css={override}
        size={40}
        color={"#037BFF"}
        loading={isLoading}
      />
    )
  }

  return (
    <div className="current--coin">
      <div>
        <h3 className="current--coin__title">{data.name}
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
