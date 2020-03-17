import axios from 'axios'
import {
	requestConfig,
	// buildRequestConfigAuth,
	// buildRequestConfigAuthOnly,
	// buildRequestConfigOptionalAuth
} from './config'
import { endpointsAuth, endpointsCryptoCoin } from './endpoints'

interface IEndpoint {
	endpoint: string
}

// function serializeObjToFormData (obj:any) {
// 		const formData = new FormData()
//
// 		for (const prop in obj) {
// 			formData.append(prop, obj[prop])
// 		}
//
// 		return formData
// }

const postRequest = (endpoint: any, payload: any) =>
	axios.post(endpoint, payload, requestConfig)

// const postRequestAuth = (endpoint: any, payload: any) =>
// 	axios.post(endpoint, JSON.stringify(payload), buildRequestConfigAuth())
//
// const deleteRequestAuth = (endpoint: any, payload: any) =>
// 	axios.delete(endpoint, {data: payload, ...buildRequestConfigAuth()})
//
// const patchRequest = (endpoint: any, payload: any) =>
// 	axios.patch(endpoint, JSON.stringify(payload), requestConfig)
//
// const patchRequestAuth = (endpoint: any, payload: any) =>
// 	axios.patch(endpoint, JSON.stringify(payload), buildRequestConfigAuth())
//
// const postRequestFormDataAuth = (endpoint: any, payload: any) =>
// 	axios.post(endpoint, serializeObjToFormData(payload), buildRequestConfigAuthOnly())
//
// const getRequest = (endpoint: any) =>
// 	axios.get(endpoint, requestConfig)
//
// const getRequestAuth = (endpoint: any) =>
// 	axios.get(endpoint, buildRequestConfigAuth())
//
// const getRequestAuthParams = (endpoint: any, params: any) =>
// 	axios.get((<string>endpoint, params), buildRequestConfigAuth())
//
// const getRequestOptionalAuth = (endpoint: any) =>
// 	axios.get(endpoint, buildRequestConfigOptionalAuth())
//
// const getRequestOptionalAuthParams = (endpoint: any, params: any) =>
// 	axios.get((<string>endpoint, params), buildRequestConfigOptionalAuth())
//
const getRequestParams = (endpoint: any, payload: any) =>
	axios.get(endpoint, payload)

const getRequest = (endpoint:any) =>
	axios.get(endpoint)

export const $apiAuth = {
	login: (payload: any) =>
		postRequest(endpointsAuth.login, payload)
}

export const $apiGetCryptoCoin = {
	getCoin: (payload: any) =>
		getRequestParams(endpointsCryptoCoin.getCoin, payload),

	getCurrentCoin: (stroke: string) =>
		getRequest(endpointsCryptoCoin.getCoin + stroke)
}


	// $api.login({})
	// .then(res => {
	//
	// })
	// 	.catch(err => {
	//
	// 	})

// console.log('api', endpoints)
//
// export default $api