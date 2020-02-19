import React from "react";

import "../index/crypto-coin-table-item.scss";

// @ts-ignore
export const ExchangeItem = (props) => {

	return (
		<>
			<div className="container">
				<li className="row">
					<div className="column__number">
						<span className="text-size">
							{props.index}
						</span>
					</div>
					<div className="column__name">
						<span className="text-size">
							{props.quoteId}
						</span>
					</div>
					<div className="column__name">
						<span className="text-size">
							{props.exchangeId}
						</span>
					</div>
					<div className="column__marketcap column--hidden__marketcap">
						<span className="text-size">
							${Number(props.priceUsd).toFixed(2)}
						</span>
					</div>
					<div className="column__volume">
          <span className="text-size">
						${Number(props.volumeUsd24Hr).toFixed(0)}
          </span>
					</div>
				</li>
			</div>
		</>
	)
};
