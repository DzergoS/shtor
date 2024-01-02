import React, {useMemo, useReducer} from "react";
import {APIContext} from "./APIContext";
import langReducer from "provider/reducers/lang";
import cartReducer from "provider/reducers/cart";
import emailReducer from "./reducers/email";
import productsReducer from "./reducers/products";

const APIProvider = (props) => {

	const [state, dispatch] = useReducer(
		(state, action) => ({
			lang: langReducer(state.lang, action),
			cart: cartReducer(state.cart, action),
			email: emailReducer(state.email, action),
			products: productsReducer(state.products, action),
		}),
		{
			lang: 'ua',
			cart: [],
			email: '',
			products: [],
		}
	);

	const contextValue = useMemo(
		() => ({state, dispatch}),
		[state, dispatch]
	);

	// console.log('lang', lang);
	// console.log('lang', lang);

	return (
		<APIContext.Provider value={contextValue}>
			{props.children}
		</APIContext.Provider>
	);
}

export default APIProvider
