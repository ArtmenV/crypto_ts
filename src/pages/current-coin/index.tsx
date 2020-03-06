import React from "react";

import { CurrentCrypto } from '../../components/current-coin/current-crypto'
import { CoinExchange } from '../../components/current-coin/coin-exchange'

export const CurrentCoin = () => {

	return (
		<section className="current--coin">
			<CurrentCrypto />
			<CoinExchange />
		</section>
	);
};


