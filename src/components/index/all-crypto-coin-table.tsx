import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Pagination } from 'antd';

import { selectAllCryptoCoin } from '../../utils/selectors/home-page'
import { cryptoAddAction } from "../../store/getApiData/action";
import { CryptoDatasItem } from "./crypto-coin-table-item";
import { AppState } from "../../store";

import './all-crypto-coin-table.scss'

export const AllCryptoCoinTable = () => {
  const [allCoin, setAllCoin] = useState([])

  const cryptoData = useSelector(selectAllCryptoCoin)

  const isLoading = useSelector(
    (state: AppState) => state.CryptoReducer.isLoading
  )

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cryptoAddAction());
  }, []);

  useEffect(() => {
    changePage(1, 50)
  }, [cryptoData]);

  const override = css`
    margin: 0 auto;
    margin-top: 3rem;
  `;

  const changePage = (page: any, pageSize:any):void => {
    if (page == 1) {
      const pagination = cryptoData.slice(0, 50);
      // @ts-ignore
      setAllCoin(pagination)
    } else {
      const start = page * pageSize - 50,
        end = start + pageSize;
      const pagination = cryptoData.slice(start, end);
      // @ts-ignore
      setAllCoin(pagination)
    }
  }

  if ( isLoading ) {
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
    <section>
      <div className="container table--header">
        <div className="pagination">
          <Pagination 
            defaultCurrent={1} 
            total={500} 
            defaultPageSize={50} 
            onChange={changePage}
          />
        </div>
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
          <div className="column--hidden__change-price">
          <span className="text-size">
            <strong>Change Price</strong>
          </span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-group my-10 list-group-flush">
              {allCoin.map((crypto: { supply: any; changePercent24Hr: any; volumeUsd24Hr: any; rank: any; id: any; symbol: any; name: any; priceUsd: any; marketCapUsd: any; }) => {
                return (
                  <CryptoDatasItem
                    supply={crypto.supply}
                    changePrice={crypto.changePercent24Hr}
                    volume={crypto.volumeUsd24Hr}
                    rank={crypto.rank}
                    key={crypto.id}
                    coinName={crypto.id}
                    symbol={crypto.symbol}
                    name={crypto.name}
                    price={crypto.priceUsd}
                    marketCap={crypto.marketCapUsd}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
