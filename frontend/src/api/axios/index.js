import axios from "axios";
import {appURL} from "../../config";


export const server = axios.create({
	baseURL: `${appURL}/api`,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

export const imageServer = axios.create({
	baseURL: `${appURL}/api`,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
	withCredentials: true,
})
