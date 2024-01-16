// Router.js
import ScrollToTop from "../utils/ScrollToTop";
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Info from "../pages/Info/Info";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Product from "../pages/Product/Product";
import Header from "../ui-components/Header/Header";
import Footer from "../ui-components/Footer/Footer";
import './Root.css';
import Auth from "../admin/Auth";
import Admin from "../admin";
import {
	translations
} from "../info";
import Main from "../pages/Main/Main";
import api from "../api";
import useAPI from "../provider/useAPI";
import {ADD_PRODUCTS} from "../provider/actions/products";
import AcceptCookies from "../ui-components/AcceptCookies";
import {data} from '../data'

const Root = () => {

	const {dispatch} = useAPI()

	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data: { data: payload } } = await api.products.get()
				dispatch({
					type: ADD_PRODUCTS,
					payload,
				})
			} catch (e) {
				dispatch({
					type: ADD_PRODUCTS,
					payload: data,
				})
				console.error(e)
			}
		}

		getProducts();
	}, [])

	const { infoPages: { paymentDelivery, care, privacyPolicy, returnsExchange } } = translations;

	return (
		<Router>
			<Switch>
				<Route path="/auth/login" exact component={Auth}/>
				<Route path="/admin" component={Admin}/>
				<Route path="/*">
					<ScrollToTop/>
					<Header/>
					<main>
						<Switch>
							<Route path="/" exact component={Main}/>
							<Route path="/payment-and-delivery">
								<Info
									title={paymentDelivery.title}
									text={paymentDelivery.text}
								/>
							</Route>
							<Route path="/returns">
								<Info
									title={returnsExchange.title}
									text={returnsExchange.text}
								/>
							</Route>
							<Route path="/privacy-policy">
								<Info
									title={privacyPolicy.title}
									text={privacyPolicy.text}
								/>
							</Route>
							<Route path="/care">
								<Info
									title={care.title}
									text={care.text}
								/>
							</Route>
							<Route path="/cart" component={ShoppingCart}/>
							<Route path="/:id" exact component={Product}/>
							<Route path="/:id/:variationIndex" component={Product}/>
						</Switch>
					</main>
					<Footer/>
					<AcceptCookies/>
				</Route>
			</Switch>
		</Router>
	);
};

export default Root;
