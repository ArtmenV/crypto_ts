import React from "react";
// import {useParams} from "react-router-dom";
import { useSelector } from "react-redux";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import { ICurrentExchange } from '../../store/current-coin/types'
import { AppState } from '../../store/index'

//style
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

//component
export const CoinExchange = () => {
	const classes = useStyles();

	const market = useSelector(
		(state: AppState) => state.CurrentCoinInfoReducer.exchangePrice
	)

	return (
		<div className="container">
			
			<TableContainer component={Paper}>
				<Table 
					className={classes.table} 
					aria-label="customized table"
				>
					
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
						</TableRow>
					</TableHead>
					
					<TableBody>
						{market.map((row: ICurrentExchange, index: number): JSX.Element => (
							<StyledTableRow key={index}>
								<StyledTableCell component="th" scope="row">
									{row.exchangeId}
								</StyledTableCell>
								<StyledTableCell size='small' align="right">
									{row.exchangeId}
								</StyledTableCell>
								<StyledTableCell align="right">
									{row.quoteId}
								</StyledTableCell>
								<StyledTableCell align="right">
									${Number(row.priceUsd).toFixed(2)}
								</StyledTableCell>
								<StyledTableCell align="right">
									${Number(row.volumeUsd24Hr).toFixed(2)}
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
					
				</Table>
			</TableContainer>

		</div>
	)
}
