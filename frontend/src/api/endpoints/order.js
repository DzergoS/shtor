import {server} from "../axios";

const endpoints = {
	create: (data) => server.post("/orders/create", data),
	get: () => server.get("/orders/", ),
	deleteById: ({_id}) => server.delete(`/orders/delete/${_id}`),
	sendTrackingNumber: (data) => server.post("/orders/send-tracking-id", data),
};

export default endpoints;
