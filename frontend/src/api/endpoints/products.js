import {server} from "../axios";

const endpoints = {
	get: () => server.get("/products"),
	updateById: ({_id, ...data}) => server.post(`admin/product/${_id}`, data),
	updateKeyValueById: ({_id, ...data}) => server.put(`admin/product/${_id}`, data),
	copyById: ({_id}) => server.post(`admin/product/${_id}/copy`),
	deleteById: ({_id}) => server.delete(`admin/product/${_id}`),
	updateOrder: (data) => server.put(`admin/product/updateOrder`, data),
};

export default endpoints;
