import React from 'react';

import './CheckOutTotal.css'
import useAPI from "provider/useAPI";
import isMobile from "utils/isMobile";
import {translations} from "info";

const CheckOutTotal = (props) => {
	const {state: {cart, lang}} = useAPI();

	return (
		<div className="checkout-total">
			<h4 className="checkout-total__subtotal">
				{translations.cart.subTotal[lang]}
				<span>{translations.product.currency[lang]}{props.sumOfPrices}</span>
			</h4>
			<h4 className="checkout-total__subtotal">
				{translations.cart.delivery[lang]}
				<span>{props.deliveryPrice ? `${translations.product.currency[lang]}${props.deliveryPrice}` : translations.cart.free[lang]}</span>
			</h4>
			<p className="checkout-total__total">
				{translations.cart.total[lang]}:
				<span><bdi>{translations.money[lang]}</bdi> {translations.product.currency[lang]}{props.sumOfPrices + props.deliveryPrice}</span>
			</p>
		</div>

	);
};

export default CheckOutTotal;
