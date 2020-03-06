import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Pagination } from 'antd';

import { selectAllCryptoCoin } from '../../utils/selectors/home-page'
import { cryptoAddAction } from "../../store/getApiData/action";
import { AppState } from "../../store";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import './all-crypto-coin-table.scss'
import {NavLink} from "react-router-dom";

interface IAllCrypto {
  supply: number;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
  rank: string;
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
  marketCapUsd: number;
  marketFullCap: string
  changePrice: string
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#dadada',
    color: '#black',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const AllCryptoCoinTable = () => {
  const [allCoin, setAllCoin] = useState([])

  const classes = useStyles();

  const cryptoData = useSelector(selectAllCryptoCoin)

  const isLoading = useSelector(
    (state: AppState) => state.CryptoReducer.isLoading
  )
  
  // const

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cryptoAddAction());
  }, [dispatch]);

  const changePage = useCallback((page: any, pageSize:any):void => {
    if (page === 1) {
      const pagination = cryptoData.slice(0, 50);
      
      console.log('cryptoData', pagination)
      // @ts-ignore
      setAllCoin(pagination)
    } else {
      const start = page * pageSize - 50,
        end = start + pageSize;
      const pagination = cryptoData.slice(start, end);
      // @ts-ignore
      setAllCoin(pagination)
    }
  }, [cryptoData])

  useEffect(() => {
    changePage(1, 50)
  }, [changePage, cryptoData]);

  const override = css`
    margin: 0 auto;
    margin-top: 3rem;
  `;

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
    <>
      <div className="container table--header">
  
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            total={500}
            defaultPageSize={50}
            onChange={changePage}
          />
        </div>
        
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
        
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">
                  Name
                </StyledTableCell>
                <StyledTableCell align="right">
                  Market Cap
                </StyledTableCell>
                <StyledTableCell align="right">
                  Price
                </StyledTableCell>
                <StyledTableCell align="right">
                  Volume(24)
                </StyledTableCell>
                <StyledTableCell align="right">
                  Coin Supply
                </StyledTableCell>
                <StyledTableCell align="right">
                  Change Price
                </StyledTableCell>
              </TableRow>
            </TableHead>
        
            <TableBody>
              {allCoin.map((row: IAllCrypto, index: number) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.rank}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <NavLink to={`/current-crypto/${row.id}`} className="text-size">
                      {row.name}
                    </NavLink>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.marketCapUsd}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <NavLink exact to="/market">
                      ${row.priceUsd}
                    </NavLink>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${row.volumeUsd24Hr}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${row.supply}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    { row.changePercent24Hr} %
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
      
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
