import {server} from "../axios";

const endpoints = {
	registration: (data) => server.post("/register", data),
	login: (data) => server.post("/login", data),
};

export default endpoints;
