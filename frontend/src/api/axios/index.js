import axios from "axios";

export const server = axios.create({
	baseURL: 'http://localhost:3001/api',
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
