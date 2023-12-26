import React from 'react';
import useAPI from "provider/useAPI";

import './ShoppingCart.css'
import CartProducts from "./CartProducts/CartProducts";
import CartTotal from "./CartTotal/CartTotal";
import {Link} from "react-router-dom";

const ShoppingCart = () => {

	const {state: {cart}} = useAPI()

	if (cart.length) {
		return (
			<div className="cart-wrapper">

				<h2 className="title">Cart</h2>

				<div className="cart-container">

					<CartProducts/>

					<CartTotal/>

				</div>

			</div>
		);
	}

	return (
		<div className="empty-cart">
			<h2 className="title">Cart</h2>
			<p className="cart-description">Your cart is currently empty</p>
			<Link to={'/'} className="cart-button__continue-shopping">Continue shopping</Link>
		</div>
	)
}

export default React.memo(ShoppingCart);
