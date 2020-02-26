import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { BounceLoader } from "react-spinners";
import { css}  from "@emotion/core";

import {currentCoinMarket} from "../../store/current-coin/action";
import {ExchangeItem} from "./exchange-item";

import "../index/crypto-coin-table-item.scss";

export interface IMarket {
	UserAuthReducer: {
		market: Array<any>
	};
}

export const CoinExchange = () => {
  const dispatch = useDispatch()
  const params:any = useParams()

	const market = useSelector(
		(state: any) => state.CurrentCoinInfoReducer.exchangePrice
	)

	const isLoading = useSelector(
		(state: any) => state.CurrentCoinInfoReducer.isLoading
	)

  useEffect(() => {
    dispatch(currentCoinMarket(params.id))
  }, [dispatch, params.id])

	const override = css`
    margin: 0 auto;
    margin-top: 3rem;
  `;

  if ( !market ) {
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
		<div className="container">
			<div className="row--item">
				<div className="column__number">
      <span className="text-size text__position-left">
        <strong>#</strong>
      </span>
				</div>
				<div className="column__name">
      <span className="text-size">
        <strong>Name</strong>
      </span>
				</div>
				<div className="column__marketcap column--hidden__marketcap">
      <span className="text-size">
        <strong>Market Cap</strong>
      </span>
				</div>
				<div className="column__price">
      <span className="text-size">
        <strong>Price</strong>
      </span>
				</div>
				<div className="column__volume column--hidden__volume">
      <span className="text-size">
        <strong>Volume(24)</strong>
      </span>
				</div>
				<div className="column__supply column__hidden">
      <span className="text-size">
        <strong>Coin Supply</strong>
      </span>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<ul className="list-group my-10 list-group-flush">
						{market.map( (item: { index: any; }, index: any) => {
							return (
								<ExchangeItem {...item}
									index={index}
									key={item.index}
								/>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
};
