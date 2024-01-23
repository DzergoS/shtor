import axios from "axios";

export const server = axios.create({
	// baseURL: 'https://shtor.com.ua/api',
	baseURL: 'http://localhost:3001/api',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

export const imageServer = axios.create({
	// baseURL: 'https://shtor.com.ua/api/admin/upload/image',
	baseURL: 'https://shtor.com.ua/api/admin/upload/image',
	headers: {
		'Content-Type': 'multipart/form-data',
	},
	withCredentials: true,
})
