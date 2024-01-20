import React from 'react';

import './CartTotal.css'
import useAPI from "provider/useAPI";
import isMobile from "utils/isMobile";
import {translations} from "info";

const CartTotal = () => {
	const {state: {cart, lang}} = useAPI();

	const sumOfPrices = cart.reduce((accumulator, currentObject) => {
		return accumulator + (currentObject.price[lang] * currentObject.quantity);
	}, 0);

	return (
		<div className="cart-total">
			{!isMobile
				? <>
					<h4 className="cart-total__subtotal">{translations.cart.subTotal[lang]}</h4>
					<p className="cart-total__total">{translations.cart.total[lang]}: <span>{translations.product.currency[lang]}{sumOfPrices}</span></p>
				</>
				: <>
					<h4 className="cart-total__subtotal">{translations.cart.subTotal[lang]} <span>{translations.product.currency[lang]}{sumOfPrices}</span></h4>
					<p className="cart-total__total">{translations.cart.deliveryAlert[lang]}</p>
				</>
			}
			<a
				href="https://pay.fondy.eu/api/checkout?button=1ebdc2cfb376b9962e96bb9c1caa0da30234ad55"
				className="f-p-b cart-total__check-out"
				data-button="">
				{translations.cart.checkOut[lang]}
			</a>

		</div>
	);
};

export default CartTotal;
