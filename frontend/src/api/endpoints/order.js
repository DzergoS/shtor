import {server} from "../axios";

const endpoints = {
	create: (data) => server.post("/orders/create", data),
};

export default endpoints;
