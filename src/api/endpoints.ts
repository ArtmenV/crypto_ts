import { baseUrlAuth, baseUrlCryptoCoin } from './config'

export const endpointsAuth = {
	login: baseUrlAuth + '/auth/login',
}

export const endpointsCryptoCoin = {
	getCoin: baseUrlCryptoCoin + `/assets`,
	// getCurrentCoin: baseUrlCryptoCoin + `/assets`,
}

export const getCurrentCoin = (data: any) => baseUrlCryptoCoin + `/assets${data}/assets`