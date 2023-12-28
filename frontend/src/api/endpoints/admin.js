import {server} from "../axios";

const auth = {
	login: (data) => server.post("/auth/login", data),
	checkAuth: (data) => server.get("/admin", data),
}

const products = {
	// get: (data) => server.post("/admin", data),
}

const endpoints = {
	// registration: (data) => server.post("/register", data),
	auth,
	products,
};

export default endpoints;
