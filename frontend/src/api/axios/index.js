import axios from "axios";

export const server = axios.create({
	baseURL: 'https://shtor.com.ua/api',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

export const imageServer = axios.create({
	baseURL: 'https://shtor.com.ua/api/admin/upload/image',
	headers: {
		'Content-Type': 'multipart/form-data',
	},
	withCredentials: true,
})
