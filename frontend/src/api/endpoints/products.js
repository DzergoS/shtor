import {server} from "../axios";

const endpoints = {
	get: (data) => server.post("/products", data),
};

export default endpoints;
