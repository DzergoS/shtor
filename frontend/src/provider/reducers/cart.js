import {
	DECREMENT_PRODUCT,
	DELETE_PRODUCT,
	INCREMENT_PRODUCT
} from "provider/actions/cart";

const cartReducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_PRODUCT:
			return state.map(item =>
				item._id === action.payload
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
		case DECREMENT_PRODUCT:
			return state.map(item =>
				item._id === action.payload && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			);
		case DELETE_PRODUCT:
			return state.filter(item => item._id !== action.payload);
		default:
			return state;
	}
};

export default cartReducer;
