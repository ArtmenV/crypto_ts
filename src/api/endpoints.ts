import { baseUrlAuth, baseUrlCryptoCoin } from './config'

export const endpointsAuth = {
	login: baseUrlAuth + '/auth/login',
}

export const endpointsCryptoCoin = {
	getCoin: baseUrlCryptoCoin,
}