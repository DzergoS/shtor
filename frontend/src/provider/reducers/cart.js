import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	INCREMENT_PRODUCT,
	DECREMENT_PRODUCT
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
		case ADD_PRODUCT:
			const existingProductIndex = state.findIndex(item => item._id === action.payload._id);
			if (existingProductIndex !== -1) {
				console.log('action.payload', action.payload)
				return state.map((item, index) => ({
					...item,
					quantity: index === existingProductIndex
						? item.quantity + action.payload.quantity
						: item.quantity
					})
				);
			} else return [...state, { ...action.payload, quantity: action.payload.quantity }];
		case DELETE_PRODUCT:
			return state.filter(item => item._id !== action.payload);
		default:
			return state;
	}
};

export default cartReducer;
