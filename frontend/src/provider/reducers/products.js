import {ADD_PRODUCTS} from "provider/actions/products";

const productsReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCTS:
			return action.payload;
		default:
			return state;
	}
};

export default productsReducer;
