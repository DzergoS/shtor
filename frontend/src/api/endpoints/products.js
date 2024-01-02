import {server} from "../axios";

const endpoints = {
	get: () => server.get("/products"),
};

export default endpoints;
