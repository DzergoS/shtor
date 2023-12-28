import {server} from "../axios";

const endpoints = {
	get: (data) => server.post("/api/products", data),
};

export default endpoints;
