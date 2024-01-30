import axios from "axios";
import {isProduction} from "../../config";


export const server = axios.create({
	baseURL: isProduction ? 'https://shtor.com.ua/api' : 'http://localhost:3001/api',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

export const imageServer = axios.create({
	baseURL: 'http://localhost:3001/api/admin/upload/image',
	headers: {
		'Content-Type': 'multipart/form-data',
	},
	withCredentials: true,
})
