import React from 'react';

import './CartTotal.css'
import useAPI from "provider/useAPI";
import {translations} from "info";

const CartTotal = (props) => {
	const {state: {cart, lang}} = useAPI();



	return (
		<div className="cart-total">
			<h4 className="cart-total__subtotal">{translations.cart.subTotal[lang]} <span>{translations.product.currency[lang]}{ props.sumOfPrices }</span></h4>
			<p className="cart-total__total">{translations.cart.total[lang]}: <span>{translations.product.currency[lang]}{ props.sumOfPrices }</span></p>
			<button className="cart-total__check-out" onClick={props.checkoutOnClick}>
				{translations.cart.checkOut[lang]}
				<span className="deliveryHint">{translations.cart.deliveryHint[lang]}</span>
			</button>

		</div>

	);
};

export default CartTotal;
