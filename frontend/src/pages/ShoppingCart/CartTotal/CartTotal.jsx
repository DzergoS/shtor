import React from 'react';

import './CartTotal.css'
import useAPI from "provider/useAPI";
import isMobile from "utils/isMobile";
import {translations} from "info";

const CartTotal = (props) => {
	const {state: {cart, lang}} = useAPI();

	return (
		<div className="cart-total">
			<h4 className="cart-total__subtotal">
				{translations.cart.subTotal[lang]}
				<span>{translations.product.currency[lang]}{props.sumOfPrices}</span>
			</h4>
			<h4 className="cart-total__subtotal">
				{translations.cart.delivery[lang]}
				<span>{props.deliveryPrice ? `${translations.product.currency[lang]}${props.deliveryPrice}` : translations.cart.free[lang]}</span>
			</h4>
			<p className="cart-total__total">
				{translations.cart.total[lang]}:
				<span>{translations.product.currency[lang]}{props.sumOfPrices + props.deliveryPrice}</span>
			</p>
		</div>

	);
};

export default CartTotal;
