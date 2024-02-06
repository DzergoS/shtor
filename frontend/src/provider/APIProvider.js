import React, {useEffect, useMemo, useReducer, useState} from "react";
import {APIContext} from "./APIContext";
import langReducer from "provider/reducers/lang";
import cartReducer from "provider/reducers/cart";
import emailReducer from "./reducers/email";
import productsReducer from "./reducers/products";
import mobileReducer from "./reducers/mobile";
import {CHANGE_IS_MOBILE} from "./actions/mobile";
import currencyReducer from "./reducers/currency";
import api from "../api";
import {ADD_PRODUCTS} from "./actions/products";

const APIProvider = (props) => {

	const mediaQuery = window.matchMedia("(max-width: 768px)");
	const [state, dispatch] = useReducer(
		(state, action) => ({
			lang: langReducer(state.lang, action),
			currency: currencyReducer(state.currency, action),
			cart: cartReducer(state.cart, action),
			email: emailReducer(state.email, action),
			products: productsReducer(state.products, action),
			isMobile: mobileReducer(state.isMobile, action),
		}),
		{
			lang: 'ua',
			currency: 'uah',
			cart: [],
			email: '',
			products: [],
			isMobile: mediaQuery.matches,
		}
	);

	const handleTabletChange = (e) => dispatch({
		type: CHANGE_IS_MOBILE,
		payload: !!e.matches
	});


	useEffect(()=> {
		mediaQuery.addListener(handleTabletChange);
		return () => {
			mediaQuery.removeListener(handleTabletChange)
		}
	},[])

	const getProducts = async () => {
		try {
			const {data: {data: payload}} = await api.products.get()
			dispatch({
				type: ADD_PRODUCTS,
				payload,
			})
		} catch (e) {
			console.error(e)
		}
	}
	useEffect(() => {getProducts()}, [])

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
