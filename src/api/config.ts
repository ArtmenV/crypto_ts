// const baseUrlAuth = process.env.REACT_APP_URL_AUTH
const baseUrlAuth = "https://demo-dpchallengeapi.zimalab.com/api"
const baseUrlCryptoCoin = "https://cors-anywhere.herokuapp.com/http://api.coincap.io/v2"

console.log('baseUrlCryptoCoin', baseUrlCryptoCoin)

const token = () => {
	return localStorage.getItem('token')
}

const requestConfig = {
	headers: {
		'Content-Type': 'application/json'
	}
}

const buildRequestConfigAuth = () => {
	return {
		headers: {
			...requestConfig.headers,

			'Authorization': "bearer " + token()
		}
	}
}

const buildRequestConfigOptionalAuth = () => {
	const _token = token()

	const config: any = {
		headers: {
			...requestConfig.headers
		}
	}

	if (_token && _token !== 'undefined') {
		config.headers['Authorization'] = "bearer " + _token
	}

	return config
}

const buildRequestConfigAuthOnly = () => {
	return {
		headers: {
			'Authorization': "bearer " + token(),
		}
	}
}

export {
	baseUrlAuth,
	baseUrlCryptoCoin,
	requestConfig,
	buildRequestConfigAuth,
	buildRequestConfigAuthOnly,
	buildRequestConfigOptionalAuth
}
