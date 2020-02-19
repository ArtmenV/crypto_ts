import React from "react";
import { NavLink } from "react-router-dom";

import "./crypto-coin-table-item.scss";

export const CryptoDatasItem = ({
  marketCap,
  price,
  name,
  symbol,
  rank,
  volume,
  changePrice,
  supply,
  coinName
}: any) => {
  const marketFullCap = Math.round(marketCap).toLocaleString();
  const coinPrice = ((price * 10) / 10).toLocaleString();
  const coinvolume = Math.round(volume).toLocaleString();
  const coinSupply = Math.round(supply).toLocaleString();
  const changePriceCoin = ((changePrice * 100) / 100).toFixed(4);

  return (
    <div className="container">
      <li className="row">
        <div className="column__number inner">
          <span className="text-size">{rank}</span>
        </div>
        <div className="column__name">
          <NavLink to={`/current-crypto/${coinName}`} className="text-size">
            <strong>
              {name}
            </strong>
          </NavLink>
        </div>
        <div className="column__marketcap column--hidden__marketcap">
          <span className="text-size">${marketFullCap}</span>
        </div>
        <div className="column__volume">
          <span className="text-size"> 
            <NavLink exact to="/market">
              ${coinPrice}
            </NavLink></span>
        </div>
        <div className="column__price column--hidden__volume">
          <span className="text-size "> 
            <NavLink exact to="/market">
              ${coinvolume}
            </NavLink> 
          </span>
        </div>
        <div className="column__supply column__hidden">
          <span className="text-size">
            {coinSupply}&nbsp;{symbol}
          </span>
        </div>
        <div className="column--hidden__change-price-inner">
          <span className="text-size">
            {changePriceCoin}%
          </span>
        </div>
      </li>
    </div>
  );
};
