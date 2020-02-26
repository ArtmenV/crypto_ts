const baseUrl = process.env.REACT_APP_URL

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
	baseUrl,
	requestConfig,
	buildRequestConfigAuth,
	buildRequestConfigAuthOnly,
	buildRequestConfigOptionalAuth
}
